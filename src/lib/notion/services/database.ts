import { notion, NOTION_DATABASE_ID } from '../config';
import { NotionProperties } from '../types';

let propertiesCache: NotionProperties | null = null;
let lastFetchTime: number = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds

export async function getDatabaseProperties(): Promise<NotionProperties> {
  const now = Date.now();
  
  // Return cached properties if they exist and are not expired
  if (propertiesCache && (now - lastFetchTime) < CACHE_DURATION) {
    return propertiesCache;
  }

  try {
    const response = await notion.databases.retrieve({
      database_id: NOTION_DATABASE_ID,
    });

    // Update cache
    propertiesCache = response.properties as NotionProperties;
    lastFetchTime = now;

    return propertiesCache;
  } catch (error) {
    console.error('Error fetching database properties:', error);
    throw error;
  }
}

export async function getPropertyOptions(propertyName: string) {
  try {
    const properties = await getDatabaseProperties();
    const property = properties[propertyName];

    if (!property) {
      throw new Error(`Property ${propertyName} not found in database`);
    }

    if (property.type !== 'select') {
      throw new Error(`Property ${propertyName} is not a select property`);
    }

    return property.select?.options;
  } catch (error) {
    console.error(`Error fetching options for property ${propertyName}:`, error);
    throw error;
  }
} 