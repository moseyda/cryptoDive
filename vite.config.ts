import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    proxy: {
      '/api/coingecko': {
        target: 'https://api.coingecko.com/api/v3',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/coingecko/, '')
      },
      '/api/cryptocompare': {
        target: 'https://min-api.cryptocompare.com/data/v2',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/cryptocompare/, '')
      },
      '/api/jobicy': {
        target: 'https://jobicy.com/api/v2',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/jobicy/, '')
      }
    }
  }
})
