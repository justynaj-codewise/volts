import { defineConfig } from 'vitest/config';
import checker from 'vite-plugin-checker';
import { resolve } from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

export default defineConfig({
  // build: {
  //   rollupOptions: {
  //     input: {
  //       main: resolve(__dirname, 'src', 'index.html'),
  //       // nested: resolve(__dirname, 'src/nested/index.html'),
  //     },
  //   },
  // },
  test: {
    include: ['src/**/*.ts'],
    setupFiles: [path.resolve(__dirname, 'scripts/setup.ts')],
    passWithNoTests: true,
    environment: 'jsdom',
    globals: true,
  },
  plugins: [tsconfigPaths()],
  // plugins: [checker({ typescript: true })]
});