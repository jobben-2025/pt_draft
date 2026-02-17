/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'accent': '#0E6BA8',
        'accent-dark': '#0A4F7D',
        'dark': '#1A1A2E',
        'gray-text': '#2D3748',
        'gray-muted': '#718096',
        'gray-light': '#F7FAFC',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest': '0.15em',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
