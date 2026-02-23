import { defineCollection, z } from 'astro:content';

// pages 컬렉션 — 17개 페이지 콘텐츠
const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    heroTitle: z.string().optional(),
    heroSubtitle: z.string().optional(),
    cards: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        href: z.string(),
      })
    ).optional(),
    ctaSection: z.object({
      heading: z.string(),
      body: z.string(),
      cta: z.string(),
      href: z.string().optional(),
    }).optional(),
    summary: z.string().default(''),
    bullets: z.array(z.string()).default([]),
    audience: z.string().default(''),
    ctaLabel: z.string().default(''),
    ctaPrimary: z.string().default(''),
    ctaSecondary: z.string().default(''),
    stats: z.any().default([]),
    timeline: z.any().default([]),
    lastModified: z.string().default(''),
    sections: z.any().default([]),
    packageSection: z.any().default({}),
    footnote: z.string().default(''),
    formNote: z.string().default(''),
    formFallback: z.string().default(''),
    responseTime: z.any().default({}),
    mapNote: z.string().default(''),
    translationSection: z.any().default({}),
    differentiators: z.any().default([]),
    founders: z.any().default([]),
    coreMessage: z.any().default({}),
  }),
});

// common 컬렉션 — 공통 데이터 (site, faq)
const common = defineCollection({
  type: 'data',
  schema: z.record(z.any()),
});

export const collections = {
  pages,
  common,
};
