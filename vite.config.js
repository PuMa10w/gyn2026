import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import purgecss from '@fullhuman/postcss-purgecss';

const packageJson = JSON.parse(fs.readFileSync(new URL('./package.json', import.meta.url), 'utf8'));

function readGitCommit() {
  try {
    return execSync('git rev-parse --short HEAD', { encoding: 'utf8' }).trim();
  } catch {
    return process.env.CF_PAGES_COMMIT_SHA?.slice(0, 7) || 'local';
  }
}

const appCommit = process.env.CF_PAGES_COMMIT_SHA?.slice(0, 7) || readGitCommit();
const appVersion = process.env.CF_PAGES_COMMIT_SHA
  ? `${packageJson.version}+${process.env.CF_PAGES_COMMIT_SHA.slice(0, 7)}`
  : `${packageJson.version}+${appCommit}`;
const buildTime = process.env.BUILD_TIME || new Date().toISOString();

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'favicon.ico', 'logo192.png', 'logo512.png', 'apple-touch-icon.png', 'splash-750x1334.png', 'splash-1125x2436.png', 'splash-1242x2208.png'],
      manifest: {
        name: 'GYN Clinical — клинический справочник',
        short_name: 'GYN',
        description: 'Профессиональный клинический справочник по гинекологии и акушерству',
        theme_color: '#6B5C9C',
        background_color: '#FAF7F4',
        color: '#6B5C9C',
        display: 'standalone',
        orientation: 'portrait-primary',
        scope: '.',
        start_url: '.',
        prefer_related_applications: false,
        categories: ['medical', 'health', 'fitness'],
        lang: 'ru',
        icons: [
          {
            src: 'favicon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any',
          },
          {
            src: 'favicon.ico',
            sizes: '64x64 32x32 24x24 16x16',
            type: 'image/x-icon',
          },
          {
            src: 'logo192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: 'logo512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: 'apple-touch-icon.png',
            sizes: '180x180',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
      workbox: {
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        skipWaiting: true,
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
      },
    }),
  ],
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
  css: {
    postcss: {
      plugins: [
        purgecss({
          content: [
            './index.html',
            './src/**/*.{ts,tsx,js,jsx}',
          ],
          safelist: {
            // Статические селекторы, которые purgecss может недоучесть
            standard: [
              /^risk-flag--/,
              /^severity-bar--/,
              /^color-/,
              /^status-dot--/,
              /^status-eyebrow--/,
              /^icd-badge--/,
              /^theme-color--/,
              /^interaction-/,
              /^is-/,
              /^active$/,
              /^mobile-sheet$/,
              /^is-mobile$/,
              /^is-gynecology$/,
              /^is-obstetrics$/,
              /^is-none$/,
              /^is-favorite$/,
              /^is-active$/,
              /^is-collapsed$/,
              /^listening$/,
            ],
            // Динамические модификаторы вида prefix--{var}, собранные из кода.
            // Без этого purgecss вырезает нужные классы карточек/панелей/бейджей.
            greedy: [
              /clinical-badge--/,
              /clinical-card--/,
              /clinical-panel--/,
              /premium-badge--/,
              /premium-button--/,
              /premium-card--/,
              /risk-flag--/,
              /source-badge--/,
              /tool-panel--/,
              /workbench-command-badge--/,
              /severity-bar--/,
              /status-dot--/,
              /status-eyebrow--/,
              /icd-badge--/,
              /theme-color--/,
              /interaction-/,
              /-active$/,
              /-mobile$/,
              /-favorite$/,
              /-collapsed$/,
              /-gynecology$/,
              /-obstetrics$/,
              /-none$/,
              /-high$/,
              /-critical$/,
              /-moderate$/,
              /-low$/,
              /-emerald$/,
              /-gold$/,
              /-turquoise$/,
              /-rose$/,
              /-danger$/,
              /-warning$/,
              /-success$/,
              /-accent$/,
              /-neutral$/,
              /-default$/,
            ],
          },
          variables: true,
          keyframes: true,
          fontFace: true,
        }),
      ],
    },
  },
  server: {
    port: 3000,
  },
  define: {
    'import.meta.env.VITE_APP_VERSION': JSON.stringify(appVersion),
    'import.meta.env.VITE_APP_COMMIT': JSON.stringify(appCommit),
    'import.meta.env.VITE_BUILD_TIME': JSON.stringify(buildTime),
  },
  build: {
    target: 'esnext',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('framer-motion')) {
              return 'motion-vendor';
            }

            if (id.includes('three')) {
              return 'three-vendor';
            }

            if (id.includes('react-icons')) {
              return 'icons-vendor';
            }

            return 'vendor';
          }
        },
      },
    },
  },
});
