// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  colorMode: {
    preference: 'light'
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/device',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxt/ui',
    '@nuxt/image',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          'DM Sans': [400, 700]
        }
      }
    ]
  ],
  srcDir: 'src',
  pinia: {
    storesDirs: ['./stores/**']
  },
  css: ['~/assets/css/global.css', '~/assets/css/variables.css'],
  plugins: ['~/plugins/theme.ts']
})
