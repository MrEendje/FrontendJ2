import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // Bootstrap 5.3 gebruikt nog oudere Sass-syntax (@import, red(), if(), ...).
        // Dat werkt prima, maar nieuwe Sass-versies geven daar honderden waarschuwingen over.
        silenceDeprecations: ['import', 'global-builtin', 'color-functions', 'if-function'],
      },
    },
  },
})
