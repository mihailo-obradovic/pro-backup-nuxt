// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  devtools: { enabled: true },

  ssr: false,

  runtimeConfig: {
    app: {
      //
    },

    public: {
      //
    }
  },

  modules: ['@nuxt/eslint', '@nuxt/test-utils', '@nuxt/icon'],

  css: ['@/assets/styles/main.scss'],

  components: {
    dirs: ['@/components/shared']
  },

  imports: {
    dirs: ['services']
  }
});
