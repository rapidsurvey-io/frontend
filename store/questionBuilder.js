export const state = () => ({
  showQuestionBuilder: false,
  questionToEdit: null
})

export const mutations = {
  hide: (state) => {
    state.showQuestionBuilder = false
    state.questionToEdit = null
  },

  show: (state) => {
    state.showQuestionBuilder = true
  },

  edit: (state, question) => {
    state.questionToEdit = question
  }
}

export const actions = {
  start: ({ commit }) => {
    commit('show')
  },

  edit: ({ commit }, question) => {
    commit('edit', question)
    commit('show')
  },

  cancel: ({ commit }) =>
    commit('hide')
}
