import { notion, NOTION_DATABASE_ID } from '../config';
import { getDatabaseProperties } from './database';
import { NOTION_EMOJIS, NOTION_ORIGINS, NOTION_STATUS } from '../constants';

export async function addNewsletterSubscriber(email: string) {
  try {
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0]; // YYYY-MM-DD

    // Get database properties to ensure we're using the correct property names
    const properties = await getDatabaseProperties();
    console.log('Database properties:', properties);

    const response = await notion.pages.create({
      parent: {
        database_id: NOTION_DATABASE_ID,
      },
      icon: {
        emoji: NOTION_EMOJIS.Newsletter,
      },
      properties: {
        // The page title will be the email
        title: {
          title: [
            {
              text: {
                content: email,
              },
            },
          ],
        },
        // Use the exact property names from the database
        ...Object.entries(properties).reduce((acc, [key, value]) => {
          if (value.type === 'select') {
            if (key.toLowerCase() === 'origin') {
              acc[key] = {
                select: {
                  name: NOTION_ORIGINS.Newsletter,
                },
              };
            } else if (key.toLowerCase() === 'status') {
              acc[key] = {
                select: {
                  name: NOTION_STATUS.Lead,
                },
              };
            }
          } else if (value.type === 'date' && key.toLowerCase() === 'date') {
            acc[key] = {
              date: {
                start: formattedDate,
              },
            };
          }
          return acc;
        }, {} as Record<string, unknown>),
      },
    });

    return response;
  } catch (error) {
    console.error('Error adding subscriber to Notion:', error);
    throw error;
  }
} 