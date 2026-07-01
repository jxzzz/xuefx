import tailwindPreset from '@xuefx/ui-theme/tailwind-preset';

/** @type {import('tailwindcss').Config} */
export default {
  presets: [tailwindPreset],
  content: ['./components/**/*.tsx', './index.ts', './lib/**/*.ts'],
  theme: {
    extend: {},
  },
  plugins: [],
};
