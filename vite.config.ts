import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 项目站：husandy3-hub.github.io/husandy-hub.github.io/
// 若改用账号主页仓库 husandy3-hub.github.io，请把 base 改为 '/'
export default defineConfig({
  plugins: [react()],
  base: '/husandy-hub.github.io/',
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
