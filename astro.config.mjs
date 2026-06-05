import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';



export default defineConfig({

  // L'URL racine fournie par GitHub Pages

  site: 'https://ADN2035.github.io',

  

  // Le nom exact de ton dépôt GitHub (obligatoire pour le routage des ressources)

  base: '/infrastructure-web',

  

  integrations: [

    sitemap()

  ],

});