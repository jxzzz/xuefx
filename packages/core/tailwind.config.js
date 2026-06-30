import tailwindPreset from '@xuefx/ui-theme/tailwind-preset';

/** @type {import('tailwindcss').Config} */
export default {
  presets: [tailwindPreset],
  content: ['./components/**/*.{jsx,js}', './index.js'],
  theme: {
    extend: {},
  },
  plugins: [],
};
