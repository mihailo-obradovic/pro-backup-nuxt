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

  modules: [
    '@nuxt/eslint',
    '@nuxt/test-utils',
    '@nuxt/icon',
    '@vueuse/nuxt',
    '@nuxt/ui-pro'
  ],

  css: ['@/assets/styles/main.scss'],

  components: {
    dirs: ['@/components/shared']
  },

  imports: {
    dirs: ['services']
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
        file: '@/pages/Home.vue'
      });
    }
  }
});
