export default {
  auth: {
    redirect: {
      login: '/', // redirect user when not connected
      callback: '/auth/signed-in'
    },
    strategies: {
      local: false,
      auth0: {
        domain: 'typhoeus.eu.auth0.com',
        client_id: '7fto0Sd9UzW1AykFOxjp57yPwYbm8ki8'
      }
    }
  },

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
    }],
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
    '@nuxtjs/auth',
    '@nuxtjs/pwa',
    'nuxt-webfontloader',
    'cookie-universal-nuxt'
  ],

  plugins: [
    '~/plugins/fontawesome.plugin.js',
    '~/plugins/sharedComponents.plugin.js',
    { src: '~/plugins/state-persist', ssr: false }
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
