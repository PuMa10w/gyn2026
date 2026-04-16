import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'tsx',
    include: /src\/.*\.(ts|tsx|js|jsx)$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'tsx',
        '.ts': 'tsx',
      },
      target: 'esnext',
    },
  },
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
