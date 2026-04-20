import { defineConfig } from 'tinacms';

export default defineConfig({
  branch: 'main',
  clientId: process.env.PUBLIC_TINA_CLIENT_ID!,
  token: process.env.TINA_TOKEN!,

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },

  media: {
    tina: {
      mediaRoot: 'uploads',
      publicFolder: 'public',
    },
  },

  schema: {
    collections: [
      {
        name: 'watches',
        label: 'Watches',
        path: 'src/content/watches',
        format: 'json',
        fields: [
          { type: 'string', name: 'brand', label: 'Brand', isTitle: true, required: true },
          { type: 'string', name: 'model', label: 'Model' },
          { type: 'string', name: 'reference', label: 'Reference' },
          { type: 'string', name: 'bezel', label: 'Bezel' },
          { type: 'string', name: 'year', label: 'Year' },
          { type: 'string', name: 'caseSize', label: 'Case Size' },
          { type: 'string', name: 'movement', label: 'Movement' },
          { type: 'string', name: 'condition', label: 'Condition' },
          { type: 'string', name: 'includes', label: 'Includes' },
          { type: 'number', name: 'price', label: 'Price (USD, numeric)' },
          { type: 'string', name: 'priceDisplay', label: 'Price (display)' },
          { type: 'string', name: 'slug', label: 'Slug' },
          { type: 'string', name: 'description', label: 'Description', ui: { component: 'textarea' } },
          { type: 'image', name: 'photo', label: 'Photo' },
        ],
      },
      {
        name: 'journal',
        label: 'Journal',
        path: 'src/content/journal',
        format: 'md',
        fields: [
          { type: 'string', name: 'title', label: 'Title', isTitle: true, required: true },
          { type: 'string', name: 'slug', label: 'Slug' },
          { type: 'string', name: 'category', label: 'Category' },
          { type: 'string', name: 'excerpt', label: 'Excerpt', ui: { component: 'textarea' } },
          { type: 'datetime', name: 'date', label: 'Date' },
          { type: 'image', name: 'coverPhoto', label: 'Cover Photo' },
          { type: 'rich-text', name: 'body', label: 'Body', isBody: true },
        ],
      },
    ],
  },
});
