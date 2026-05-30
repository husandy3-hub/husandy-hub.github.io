import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 用户站（仓库须命名为 husandy3-hub.github.io）→ https://husandy3-hub.github.io/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
