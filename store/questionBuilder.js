export const state = () => ({
  show: false
})

export const mutations = {
  hide: (state) => {
    state.show = false
  },

  show: (state, message) => {
    state.show = true
  }
}

export const actions = {
  start: ({ commit }) =>
    commit('show'),

  cancel: ({ commit }) =>
    commit('hide')
}
