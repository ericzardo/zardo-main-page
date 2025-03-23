export interface NotionProperty {
  type: 'select' | 'date' | 'rich_text';
  select?: {
    options: Array<{ name: string }>;
  };
}

export interface NotionProperties {
  [key: string]: NotionProperty;
} 