import { createApp } from 'vue'
import '@mdi/font/css/materialdesignicons.css'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

import App from './App.vue'
import router from './router'
import '@/styles/main.scss'

const qlewareLightTheme = {
  dark: false,
  colors: {
    primary: '#2F223E',
    'on-primary': '#978ABD',
    'on-primary-lighter-1': '#766E80',
    'on-primary-darken-1': '#978ABD',
    'on-primary-darken-2': '#A89CB6',
    secondary: '#FF8521',
    'on-secondary': '#FFFFFF',
    tertiary: '#7032DC',
    'tertiary-light': '#FFF5EB',
    'on-tertiary': '#FFFFFF',
    success: '#33A371',
    surface: '#C8BED3',
    'surface-variant': '#F6F1FB',
    dark: '#1A1120',
    light: '#FFFFFF',
    'on-dark-1': '#FFFFFF',
    'on-dark-2': '#978ABD',
    'on-dark-3': '#A89CB6',
    'on-background': '#000000',
    'on-background-lighter-1': '#766E80',
  },
  variables: {},
}

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: 'qlewareLightTheme',
    themes: {
      qlewareLightTheme,
    },
  },
})

const app = createApp(App)

app.use(vuetify)
app.use(router)

app.mount('#app')
