import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

export default defineConfig({
  base: '/react-fog/',
  plugins: [react()],
  resolve: {
    alias: {
      'react-fog': path.join(rootDir, 'src'),
    },
  },
  server: {
    fs: {
      allow: [rootDir],
    },
  },
});
