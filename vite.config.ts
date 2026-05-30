import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages: 从仓库 /docs 发布；用户站点或自定义域名使用根路径 base
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
