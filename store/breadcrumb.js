import {
  BREADCRUMB_SET_LINKS
} from '@/store/mutations.constants'

export const state = () => ({
  links: []
})

export const mutations = {
  [BREADCRUMB_SET_LINKS]: (state, links) => {
    state.links = links
  }
}

export const actions = {
  set: ({ commit }, links) => {
    const homeLink = {
      icon: 'home',
      title: 'Home',
      href: '/'
    }

    links = [
      homeLink,
      ...links
    ]

    commit(BREADCRUMB_SET_LINKS, links)
  }
}
