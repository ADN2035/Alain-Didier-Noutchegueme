import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://adn2035.github.io/Alain-Didier-Noutchegueme/',
  base: '/infrastructure-web',
  integrations: [
    tailwind(),
    sitemap()
  ],
});