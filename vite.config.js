import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig(({ mode }) => {
  const isProd = mode  === 'production'

  return {
    base: isProd ? '/site-portfolio/' : '/',
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use '@/styles/helpers' as *;
        `
        }
      }
    }
  }
})