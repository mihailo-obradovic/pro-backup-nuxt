// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  devtools: { enabled: true },

  runtimeConfig: {
    app: {
      //
    },

    public: {
      //
    }
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/test-utils',
    '@nuxt/ui-pro',
    '@vueuse/nuxt'
  ],

  css: ['@/app/assets/styles/main.css'],

  routeRules: {
    '/api/**': {
      cors: true
    }
  },

  hooks: {
    'pages:extend'(pages) {
      pages.forEach((page) => {
        if (page.name) {
          page.path = page.path
            .replace(/([a-z])([A-Z])/g, '$1-$2')
            .toLowerCase();
        }
      });

      pages.push({
        name: 'Home',
        path: '/',
        alias: '/home',
        file: '@/app/pages/Home.vue'
      });
    }
  }
});
