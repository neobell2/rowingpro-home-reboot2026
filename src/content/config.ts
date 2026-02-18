import { defineCollection, z } from 'astro:content';

// pages 컬렉션 — 17개 페이지 콘텐츠
const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }).passthrough(),
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
