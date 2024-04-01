// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  colorMode: {
    preference: 'light'
  },
  devtools: { enabled: false },
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
    ],
    '@nuxtjs/supabase'
  ],
  srcDir: 'src',
  pinia: {
    storesDirs: ['./stores/**']
  },
  css: ['~/assets/css/global.css', '~/assets/css/variables.css'],
  plugins: ['~/plugins/theme.ts'],
  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    redirect: false,
    redirectOptions: {
      login: '/',
      callback: '/confirm'
    }
  },
  runtimeConfig: {
    public: {
      baseUrl:
        process.env.VERCEL_ENV === 'production'
          ? process.env.BASE_URL
          : 'http://localhost:3000'
    }
  },
  ui: {
    icons: ['mdi']
  }
})
