import {
  ACTIVE_SURVEY_DELETE_QUESTION,
  ACTIVE_SURVEY_DELETE_CATEGORY,
  ACTIVE_SURVEY_SET_SURVEY_NAME,
  ACTIVE_SURVEY_SET_SURVEY_DESCRIPTION,
  ACTIVE_SURVEY_SET_SURVEY_QUESTIONS,
  ACTIVE_SURVEY_SET_SURVEY_CATEGORIES,
  ACTIVE_SURVEY_UPDATE_CATEGORY_NAME
} from '@/store/mutations.constants'

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
  [ACTIVE_SURVEY_DELETE_QUESTION]: (state, questionId) => {
    state.questions = state.questions.filter(question => question.questionId !== questionId)
  },

  [ACTIVE_SURVEY_DELETE_CATEGORY]: (state, categoryName) => {
    state.categories = state.categories.filter(cat => cat.categoryName !== categoryName)
  },

  [ACTIVE_SURVEY_SET_SURVEY_NAME]: (state, surveyName) => {
    state.surveyName = surveyName
  },

  [ACTIVE_SURVEY_SET_SURVEY_DESCRIPTION]: (state, surveyDescription) => {
    state.surveyDescription = surveyDescription
  },

  [ACTIVE_SURVEY_SET_SURVEY_QUESTIONS]: (state, questions) => {
    state.questions = questions
  },

  [ACTIVE_SURVEY_SET_SURVEY_CATEGORIES]: (state, categories) => {
    state.categories = categories
  },

  [ACTIVE_SURVEY_UPDATE_CATEGORY_NAME]: (state, { oldCategoryName, newCategoryName }) => {
    state.questions
      .filter(qst => qst.categoryName === oldCategoryName)
      .forEach((question) => {
        question.categoryName = newCategoryName
      })
  }
}

export const actions = {
  startTemplate: ({ commit }, { questions, surveyName, surveyDescription, categories }) => {
    commit(ACTIVE_SURVEY_SET_SURVEY_NAME, surveyName)
    commit(ACTIVE_SURVEY_SET_SURVEY_DESCRIPTION, surveyDescription)
    commit(ACTIVE_SURVEY_SET_SURVEY_CATEGORIES, categories || [])
    commit(ACTIVE_SURVEY_SET_SURVEY_QUESTIONS, questions || [])
  },

  updateQuestion: ({ commit, state }, question) => {
    commit(ACTIVE_SURVEY_DELETE_QUESTION, question.questionId)

    const questions = [
      ...state.questions,
      question
    ]

    commit(ACTIVE_SURVEY_SET_SURVEY_QUESTIONS, questions)
  },

  updateCategory: ({ commit, state }, { oldCategoryName, newCategoryName, newCategoryDescription, colourCode }) => {
    commit(ACTIVE_SURVEY_UPDATE_CATEGORY_NAME, { oldCategoryName, newCategoryName })
    commit(ACTIVE_SURVEY_DELETE_CATEGORY, oldCategoryName)

    const categories = [...state.categories]

    categories.push({
      categoryName: newCategoryName,
      categoryDescription: newCategoryDescription,
      colourCode
    })

    commit(ACTIVE_SURVEY_SET_SURVEY_CATEGORIES, categories)
  }
}
