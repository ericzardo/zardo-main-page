import { notion, NOTION_DATABASE_ID } from '../config';
import { getDatabaseProperties } from './database';
import { NOTION_EMOJIS, NOTION_ORIGINS, NOTION_STATUS } from '../constants';

export async function addContact(name: string, email: string, message: string) {
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
        emoji: NOTION_EMOJIS.Contact,
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
                  name: NOTION_ORIGINS.Contact,
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
          } else if (value.type === 'rich_text' && key.toLowerCase() === 'name') {
            acc[key] = {
              rich_text: [
                {
                  text: {
                    content: name,
                  },
                },
              ],
            };
          }
          return acc;
        }, {} as Record<string, unknown>),
      },
      children: [
        {
          object: 'block',
          type: 'heading_2',
          heading_2: {
            rich_text: [
              {
                type: 'text',
                text: {
                  content: `${NOTION_EMOJIS.Contact} Message sent:`,
                },
              },
            ],
          },
        },
        {
          object: 'block',
          type: 'paragraph',
          paragraph: {
            rich_text: [
              {
                type: 'text',
                text: {
                  content: message,
                },
              },
            ],
          },
        },
      ],
    });

    return response;
  } catch (error) {
    console.error('Error adding contact to Notion:', error);
    throw error;
  }
} 