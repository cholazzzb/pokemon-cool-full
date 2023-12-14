import { configDefaults, defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    alias: {
      '@/': new URL('./src/', import.meta.url).pathname,
    },
    css: true,
    environment: 'jsdom',
    exclude: [...configDefaults.exclude, './e2e/**'],
  },
});
