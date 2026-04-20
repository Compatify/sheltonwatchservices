import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';

// TinaCMS integration:
// Tina does not ship as an Astro integration plugin. Instead, the Tina CLI
// (`@tinacms/cli`) wraps Astro at build/dev time:
//   - `npm run dev`   -> `tinacms dev -c "astro dev"`   (admin at /admin/index.html)
//   - `npm run build` -> `tinacms build && astro build` (admin output to /admin/)
// Tina is configured in `tina/config.ts`. Required env vars:
//   PUBLIC_TINA_CLIENT_ID, TINA_TOKEN  (see .env locally, Netlify dashboard in prod)
export default defineConfig({
  site: 'https://sheltonwatchservices.com',
  trailingSlash: 'always',
  integrations: [sitemap()],
  adapter: netlify(),
});
