export default {
  buildModules: [
    '@nuxtjs/eslint-module'
  ],

  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
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
    '@nuxtjs/pwa',
    'nuxt-webfontloader'
  ],

  plugins: [
    '~/plugins/fontawesome.plugin.js',
    '~/plugins/sharedComponents.plugin.js'
  ],

  server: {
    host: '0.0.0.0'
  },

  webfontloader: {
    google: {
      families: ['Karla:400,400&display=swap']
    }
  },
}
