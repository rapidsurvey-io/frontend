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
  },
  deleteQuestion: (state, questionId) => {
    state.questions = state.questions.filter(question => question.questionId !== questionId)
  },
  deleteCategory: (state, categoryName) => {
    state.questions = state.questions.filter(question => question.categoryName !== categoryName)
  }
}

export const actions = {
  addQuestion: ({ commit }, question) => {
    commit('addQuestion', question)
  },
  deleteQuestion: ({ commit }, questionId) => {
    commit('deleteQuestion', questionId)
  },
  deleteCategory: ({ commit }, categoryName) => {
    commit('deleteCategory', categoryName)
  }
}
