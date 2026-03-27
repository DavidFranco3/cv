import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000,
    rolldownOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('html2pdf.js')) {
            return 'vendor-pdf';
          }
          if (id.includes('react/') || id.includes('react-dom/')) {
            return 'vendor-react';
          }
        },
      },
    },
  },
})
