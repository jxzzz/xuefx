import tailwindPreset from '@xuefx/ui-theme/tailwind-preset';

/** @type {import('tailwindcss').Config} */
export default {
  presets: [tailwindPreset],
  content: ['./src/**/*.{jsx,js}', '../packages/core/components/**/*.{jsx,js}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
