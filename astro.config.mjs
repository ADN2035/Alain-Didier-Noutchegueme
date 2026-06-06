import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Ton sous-domaine GitHub racine
  site: 'https://ADN2035.github.io',
  
  // Le nom exact de ton dépôt
  base: '/Alain-Didier-Noutchegueme',
  
  integrations: [
    tailwind(),
    sitemap()
  ],
});