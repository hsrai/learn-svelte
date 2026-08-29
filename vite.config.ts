import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    VitePWA({
      registerType: 'prompt',
      injectRegister: false,
      includeAssets: [
        'theme-focus-icon.svg',
        'theme-focus-icon-192.png',
        'theme-focus-icon-512.png',
        'theme-focus-icon-maskable.svg',
        'theme-focus-icon-maskable-512.png',
      ],
      manifest: {
        name: 'Prism Theme Studio',
        short_name: 'Prism',
        description: 'A responsive specimen for exploring colour, typography, spacing, and interface themes.',
        id: './',
        start_url: './',
        scope: './',
        display: 'standalone',
        orientation: 'any',
        background_color: '#f3f8f5',
        theme_color: '#14865c',
        icons: [
          { src: 'theme-focus-icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
          { src: 'theme-focus-icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
          { src: 'theme-focus-icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        cleanupOutdatedCaches: true,
        navigateFallback: 'index.html',
        globPatterns: ['**/*.{js,css,html,png,svg,webmanifest}'],
        globIgnores: ['**/app-icon*'],
      },
    }),
  ],
})
