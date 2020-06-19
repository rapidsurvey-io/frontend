import Generator from 'shortid'

import { IDENTIFICATION_SET_IDENTIFIER } from '@/store/mutations.constants'

const COOKIE_NAME = 'rsio-identifier'

export default function ({ store, app }) {
  if (!store.state.identification.identifier) {
    const identifier = app.$cookies.get(COOKIE_NAME) || Generator.generate()

    // Store user identifier in state for easy access
    store.commit(`identification/${IDENTIFICATION_SET_IDENTIFIER}`, identifier)

    // Refresh cookie expiry or set cookie
    app.$cookies.set(COOKIE_NAME, identifier, {
      path: '/',
      maxAge: 60 * 60 * 24 * 7
    })
  }
}
