/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        /* use CSS variables so classes pick up current theme */
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        bg: 'var(--color-bg)',
        text: 'var(--color-text)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  corePlugins: {
    // Disable Tailwind's preflight to avoid conflicts with Angular Material
    preflight: false,
  },
};
