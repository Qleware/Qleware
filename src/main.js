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
    'on-primary-lighter-2': '#E6DFFA',
    'on-primary-lighter-3': '#A89CB6',
    'on-primary-darken-1': '#978ABD',
    'on-primary-darken-2': '#877395',
    'on-primary-darken-3': '#1A1120',
    secondary: '#FF8521',
    'on-secondary': '#FFFFFF',
    tertiary: '#7032DC',
    'tertiary-light': '#FFF5EB',
    'on-tertiary': '#FFFFFF',
    success: '#33A371',
    surface: '#F6F1FB',
    'on-surface': '#766E800',
    'surface-variant': '#C8BED3',
    dark: '#1A1120',
    light: '#FFFFFF',
    'light-darken-1': '#F8F7FC',
    'on-dark-1': '#FFFFFF',
    'on-dark-2': '#978ABD',
    'on-dark-3': '#A89CB6',
    'on-background': '#000000',
    'on-background-lighter-1': '#766E80',
    'on-background-lighter-2': '#575661',
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
