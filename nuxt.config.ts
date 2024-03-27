// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxt/ui'],
  srcDir: './src',
  pinia: {
    storesDirs: ['./stores/**']
  },
  colorMode: {
    preference: 'dark'
  }
})
