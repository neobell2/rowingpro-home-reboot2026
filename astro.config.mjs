import { defineConfig, passthroughImageService } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  image: {
    // sharp 네이티브 바이너리 우회 (Windows 빌드 환경 호환성)
    service: passthroughImageService(),
  },
  site: 'https://rowingpro.co.kr',
  base: '/',
  trailingSlash: 'never',
});
