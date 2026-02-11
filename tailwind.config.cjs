/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Upclub Style - Primary Colors
        primary: '#0a9afa',     // Primary Blue - CTAs, links, highlights
        orange: '#f4741a',      // Secondary Orange - hover states, accents

        // Upclub Style - Neutral Colors
        dark: {
          DEFAULT: '#0a0909',   // Dark background
          deep: '#000000',      // Deepest black
          gray: '#1e1e1e',      // Dark gray
        },
        light: {
          DEFAULT: '#f2f6f9',   // Light gray background
          pure: '#ffffff',      // Pure white
        },
        text: {
          DEFAULT: '#333333',   // Primary text
          secondary: '#595959', // Secondary text
          muted: '#999999',     // Muted text
        },
      },
      fontFamily: {
        sans: ['Pretendard Variable', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
