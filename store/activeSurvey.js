export const state = () => ({
  questions: [],
  categorySettings: []
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
  },
  updateCategoryName: (state, { oldCategoryName, newCategoryName }) => {
    state.questions
      .filter(question => question.categoryName === oldCategoryName)
      .forEach((question) => {
        question.categoryName = newCategoryName
      })
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
  },
  updateCategoryName: ({ commit }, { oldCategoryName, newCategoryName }) => {
    commit('updateCategoryName', {
      oldCategoryName,
      newCategoryName
    })
  }
}
