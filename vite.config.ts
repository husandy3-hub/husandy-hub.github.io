import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 自定义域名 husandy-hub.github.io 使用根路径；
// 若仅用项目站（无自定义域名），改为 base: '/husandy-hub.github.io/'
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
