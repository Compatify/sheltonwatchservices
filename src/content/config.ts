import { defineCollection, z } from 'astro:content';

const watches = defineCollection({
  type: 'data',
  schema: z.object({
    brand: z.string(),
    model: z.string().optional().default(''),
    reference: z.string().optional().default(''),
    bezel: z.string().optional(),
    year: z.string().optional().default(''),
    caseSize: z.string().optional().default(''),
    movement: z.string().optional().default(''),
    condition: z.string().optional().default(''),
    includes: z.string().optional().default(''),
    serialRange: z.string().optional(),
    price: z.number().optional().default(0),
    priceDisplay: z.string().optional().default(''),
    slug: z.string(),
    description: z.string().optional().default(''),
    photo: z.string().optional(),
  }),
});

const journal = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    category: z.string().optional().default(''),
    excerpt: z.string().optional().default(''),
    date: z.coerce.date().optional(),
    coverPhoto: z.string().optional(),
    answer: z.string().optional(),
    ctaHref: z.string().optional(),
    ctaLabel: z.string().optional(),
    faqs: z
      .array(
        z.object({
          q: z.string(),
          a: z.string(),
        }),
      )
      .optional()
      .default([]),
    description: z.string().optional(),
  }),
});

export const collections = { watches, journal };
