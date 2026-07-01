import tailwindPreset from '@xuefx/ui-theme/tailwind-preset';

/** @type {import('tailwindcss').Config} */
export default {
  presets: [tailwindPreset],
  content: [
    './src/**/*.{tsx,ts}',
    '../packages/core/components/**/*.tsx',
    '../packages/core/lib/**/*.ts',
    '../packages/theme/**/*.ts',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
