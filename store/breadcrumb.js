export const state = () => ({
  links: []
})

export const mutations = {
  set: (state, links) => {
    state.links = links
  }
}

export const actions = {
  set: ({ commit }, links) => {
    links = [
      {
        icon: 'home',
        title: 'Home',
        href: '/'
      },
      ...links
    ]

    commit('set', links)
  }
}
