// src/plugins/vuetify.js
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
// eslint-disable-next-line no-unused-vars
import { mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi'
  }
})

export default vuetify
