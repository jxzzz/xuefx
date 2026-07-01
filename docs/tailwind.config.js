import tailwindPreset from '@xuefx/ui-theme/tailwind-preset';

/** @type {import('tailwindcss').Config} */
export default {
  presets: [tailwindPreset],
  content: [
    './src/**/*.{jsx,js,tsx,ts}',
    '../packages/core/**/*.{tsx,ts,css}',
    '../packages/theme/**/*.{tsx,ts,css}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
