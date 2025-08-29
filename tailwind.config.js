/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
  corePlugins: {
    // Disable Tailwind's preflight to avoid conflicts with Angular Material
    preflight: false,
  },
};
