import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Choose dev port from VITE_DEV_PORT env or default 5173
const devPort = Number(process.env.VITE_DEV_PORT || 5173)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('framer-motion')) return 'framer-motion'
          if (id.includes('emailjs-com')) return 'emailjs'
        },
      },
    },
  },
  server: {
    port: devPort,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      port: devPort,
    },
  },
})
