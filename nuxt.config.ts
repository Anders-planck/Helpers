import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  publicRuntimeConfig: {
    axios: {
      baseURL: 'https://localhost:3000/api/v1'
    }
  },
  css:  ['@/assets/css/tailwind.scss']
  
})
