// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// Deploy target is overridable via env so GitHub Pages (project site under
// /website) and a future custom domain can both work without code changes.
// Local dev defaults to root.
const base = process.env.SITE_BASE || '/';
const site = process.env.SITE_URL || 'https://geobeyond.github.io';

// https://astro.build/config
export default defineConfig({
  site,
  base,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'it'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
