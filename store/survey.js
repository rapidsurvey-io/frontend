export const state = () => ({
  questions: []
})

export const getters = {
  categories: ({ questions }) =>
    new Set(questions.map(question => question.categoryName))
}

export const mutations = {
  addQuestion: (state, question) => {
    state.questions = [
      ...state.questions,
      question
    ]
  }
}

export const actions = {
  addQuestion: ({ commit }, question) => {
    commit('addQuestion', question)
  }
}
