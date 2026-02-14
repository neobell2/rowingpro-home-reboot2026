/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Design System Colors (LOCKED)
        heritage: '#2C63A7',   // Heritage Blue - 로고, 주 제목, 브랜드 핵심
        neon: '#00F0FF',       // Neon Cyan - 인터랙션, 호버, 밝기 보완
        deep: '#05080F',       // Deep Navy - 메인 배경 (프리미엄 깊이감)
        white: '#FFFFFF',      // White - 텍스트, 글라스 요소

        // Opacity variants can be added via Tailwind's opacity modifiers
        // e.g., 'heritage/50', 'neon/20'
      },
      fontFamily: {
        sans: ['Pretendard Variable', 'Inter', 'sans-serif'],
        display: ['Readex Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
