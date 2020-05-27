export default {
  buildModules: [
    '@nuxtjs/eslint-module'
  ],

  head: {
    title: 'RapidSurvey.io',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  loading: {
    color: '#fff'
  },

  mode: 'universal',

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],

  plugins: [
    '~/plugins/sharedComponents.plugin.js'
  ],

  server: {
    host: '0.0.0.0'
  }
}
