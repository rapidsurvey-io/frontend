import {
  SURVEY_BUILDER_DELETE_QUESTION,
  SURVEY_BUILDER_DELETE_CATEGORY,
  SURVEY_BUILDER_SET_SURVEY_ID,
  SURVEY_BUILDER_SET_SURVEY_NAME,
  SURVEY_BUILDER_SET_SURVEY_DESCRIPTION,
  SURVEY_BUILDER_SET_SURVEY_QUESTIONS,
  SURVEY_BUILDER_SET_SURVEY_CATEGORIES,
  SURVEY_BUILDER_UPDATE_CATEGORY_NAME,
  SURVEY_BUILDER_SHOW_PUBLISH_MODAL,
  SURVEY_BUILDER_HIDE_PUBLISH_MODAL
} from '@/store/mutations.constants'

export const state = () => ({
  surveyId: '',
  surveyName: 'Blank Survey',
  surveyDescription: 'Click me to change the name and description of this survey',
  questions: [],
  categories: [],
  showPublishBuilder: false
})

export const getters = {
  categoryNames: ({ questions }) =>
    new Set(questions.map(question => question.categoryName))
}

export const mutations = {
  [SURVEY_BUILDER_SET_SURVEY_ID]: (state, surveyId) => {
    state.surveyId = surveyId
  },

  [SURVEY_BUILDER_DELETE_QUESTION]: (state, questionId) => {
    state.questions = state.questions.filter(question => question.questionId !== questionId)
  },

  [SURVEY_BUILDER_DELETE_CATEGORY]: (state, categoryName) => {
    state.categories = state.categories.filter(cat => cat.categoryName !== categoryName)
  },

  [SURVEY_BUILDER_SET_SURVEY_NAME]: (state, surveyName) => {
    state.surveyName = surveyName
  },

  [SURVEY_BUILDER_SET_SURVEY_DESCRIPTION]: (state, surveyDescription) => {
    state.surveyDescription = surveyDescription
  },

  [SURVEY_BUILDER_SET_SURVEY_QUESTIONS]: (state, questions) => {
    state.questions = questions
  },

  [SURVEY_BUILDER_SET_SURVEY_CATEGORIES]: (state, categories) => {
    state.categories = categories
  },

  [SURVEY_BUILDER_UPDATE_CATEGORY_NAME]: (state, { oldCategoryName, newCategoryName }) => {
    state.questions
      .filter(qst => qst.categoryName === oldCategoryName)
      .forEach((question) => {
        question.categoryName = newCategoryName
      })
  },

  [SURVEY_BUILDER_SHOW_PUBLISH_MODAL]: (state) => {
    state.showPublishBuilder = true
  },

  [SURVEY_BUILDER_HIDE_PUBLISH_MODAL]: (state) => {
    state.showPublishBuilder = false
  }
}

export const actions = {
  startTemplate: ({ commit }, { questions, surveyId, surveyName, surveyDescription, categories }) => {
    commit(SURVEY_BUILDER_SET_SURVEY_ID, surveyId)
    commit(SURVEY_BUILDER_SET_SURVEY_NAME, surveyName)
    commit(SURVEY_BUILDER_SET_SURVEY_DESCRIPTION, surveyDescription)
    commit(SURVEY_BUILDER_SET_SURVEY_CATEGORIES, categories || [])
    commit(SURVEY_BUILDER_SET_SURVEY_QUESTIONS, questions || [])
  },

  updateQuestion: ({ commit, state }, question) => {
    commit(SURVEY_BUILDER_DELETE_QUESTION, question.questionId)

    const questions = [
      ...state.questions,
      question
    ]

    commit(SURVEY_BUILDER_SET_SURVEY_QUESTIONS, questions)
  },

  updateCategory: ({ commit, state }, { oldCategoryName, newCategoryName, newCategoryDescription, colourCode }) => {
    commit(SURVEY_BUILDER_UPDATE_CATEGORY_NAME, { oldCategoryName, newCategoryName })
    commit(SURVEY_BUILDER_DELETE_CATEGORY, oldCategoryName)

    const categories = [...state.categories]

    categories.push({
      categoryName: newCategoryName,
      categoryDescription: newCategoryDescription,
      colourCode
    })

    commit(SURVEY_BUILDER_SET_SURVEY_CATEGORIES, categories)
  }
}
