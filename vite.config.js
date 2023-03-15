import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
      vanillaExtractPlugin(),
    ],
    build: {
      lib: {
        entry: 'src/index.tsx',
        formats: ['es']
      }
    }
}); 