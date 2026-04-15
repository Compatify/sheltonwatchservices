import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://sheltonwatchservices.com',
  trailingSlash: 'always',
  integrations: [sitemap()],
  adapter: netlify(),
});
