import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [sveltekit()],
  proxy: {
    '/investors/stock': {
      target: 'https://finance.naver.com',
      changeOrigin: true,
      rewrite: path => path.replace(/^\/investors\/stock/, ''),
    },
  },
})
