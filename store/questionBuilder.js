export const state = () => ({
  showQuestionBuilder: false
})

export const mutations = {
  hide: (state) => {
    state.showQuestionBuilder = false
  },

  show: (state) => {
    state.showQuestionBuilder = true
  }
}

export const actions = {
  start: ({ commit }) => {
    commit('show')
  },

  cancel: ({ commit }) =>
    commit('hide')
}
