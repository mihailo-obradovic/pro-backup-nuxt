import '@mdi/font/css/materialdesignicons.css';
import type { VuetifyOptions } from 'vuetify';

import 'vuetify/styles';
import { createVuetify } from 'vuetify';

const baseColors = {
  primary: '#121637',
  secondary: '#44475a',
  accent: '#ff79c6',
  error: '#ff5555',
  warning: '#ffb86c',
  info: '#8be9fd',
  success: '#50fa7b',
  link: '#6272a4',
  highlight: '#f1fa8c'
};

const options: VuetifyOptions = {
  theme: {
    defaultTheme: 'light',

    themes: {
      light: {
        dark: false,

        colors: {
          background: '#ffffff',
          foreground: '#282a36',
          ...baseColors
        }
      },

      dark: {
        dark: true,

        colors: {
          background: '#282a36',
          foreground: '#ffffff',
          ...baseColors
        }
      }
    }
  }
};

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify(options);

  app.vueApp.use(vuetify);
});
