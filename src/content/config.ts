import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    // ... autres champs éventuels
  }),
});

export const collections = {
  'blog': blogCollection, // C'est cette clé exacte qui lie la base au routeur
};