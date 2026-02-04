import { defineConfig } from 'tsup';

export default defineConfig({
  banner: { js: '"use client"' },
  format: ['cjs', 'esm'],
  target: ['chrome51', 'firefox53', 'edge18', 'safari11', 'ios11', 'opera38', 'es6', 'node14'],
  entry: ['src/*.{ts,tsx}'],
  outDir: 'dist',
  sourcemap: true,
  dts: true,
});
