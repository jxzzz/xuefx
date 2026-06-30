import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['index.ts', 'components/**/*.tsx', 'components/**/*.ts', 'lib/**/*.ts'],
      exclude: ['components/**/*.test.tsx', 'components/**/*.demo.tsx'],
    }),
  ],
  build: {
    lib: {
      name: 'ImxUI',
      entry: ['index.ts'],
      fileName: (format, entryName) => `index.${format}.js`,
      cssFileName: 'style',
    },
    rollupOptions: {
      external: [
        'react',
        'react/jsx-runtime',
        'class-variance-authority',
        'clsx',
        'tailwind-merge',
      ],
    },
  },
});
