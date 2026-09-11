import { fileURLToPath, URL } from 'node:url'

import nuxt from '@nuxt/ui/vite'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    nuxt(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
      includeAssets: [
        // 'favicon.png', 'icons/apple-touch-icon.png'
      ],
      manifest: {
        name: 'Repair Price for 21st Century',
        short_name: 'Repair Price Guide',
        description: 'A repair guide for 21st century devices',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait',
        // start_url: '/',
        icons: [
          { src: 'centuryImg.png', sizes: '192x192', type: 'image/png' },
          { src: 'centuryImg.png', sizes: '512x512', type: 'image/png' },
          {
            src: 'centuryImg.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
    }),
  ],
  server: {
    host: true,
    port: 5173,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
