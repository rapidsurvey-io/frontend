export const state = () => ({
  surveyName: 'Blank Survey',
  surveyDescription: 'Click me to change the name and description of this survey',
  questions: [],
  categories: []
})

export const getters = {
  categories: ({ questions }) =>
    new Set(questions.map(question => question.categoryName))
}

export const mutations = {
  reset: (state) => {
    state.questions = []
    state.categories = []
  },

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
  setsurveyName: (state, surveyName) => {
    state.surveyName = surveyName
  },
  setSurveyDescription: (state, surveyDescription) => {
    state.surveyDescription = surveyDescription
  },
  setCategories: (state, categories) => {
    state.categories = categories
  },
  updateCategory: (state, { oldCategoryName, newCategoryName, newCategoryDescription, colourCode }) => {
    state.questions
      .filter(question => question.categoryName === oldCategoryName)
      .forEach((question) => {
        question.categoryName = newCategoryName
      })

    state.categories = state.categories
      .filter(category => category.categoryName !== oldCategoryName)

    state.categories.push({
      categoryName: newCategoryName,
      categoryDescription: newCategoryDescription,
      colourCode
    })
  }
}

export const actions = {
  startTemplate: ({ commit }, { questions, surveyName, surveyDescription, categories }) => {
    commit('reset')
    commit('setsurveyName', surveyName)
    commit('setSurveyDescription', surveyDescription)
    commit('setCategories', categories || [])
    questions.forEach((question) => {
      commit('addQuestion', question)
    })
  },

  addQuestion: ({ commit }, question) => {
    commit('addQuestion', question)
  },
  deleteQuestion: ({ commit }, questionId) => {
    commit('deleteQuestion', questionId)
  },
  deleteCategory: ({ commit }, categoryName) => {
    commit('deleteCategory', categoryName)
  },
  updateCategory: ({ commit }, { oldCategoryName, newCategoryName, newCategoryDescription, colourCode }) => {
    commit('updateCategory', {
      oldCategoryName,
      newCategoryName,
      newCategoryDescription,
      colourCode
    })
  }
}
