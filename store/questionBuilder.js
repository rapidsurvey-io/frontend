import {
  QUESTION_BUILDER_SHOW,
  QUESTION_BUILDER_HIDE,
  QUESTION_BUILDER_SET_EDIT_SURVEY
} from '@/store/mutations.constants'

export const state = () => ({
  showQuestionBuilder: false,
  questionToEdit: null
})

export const mutations = {
  [QUESTION_BUILDER_HIDE]: (state) => {
    state.showQuestionBuilder = false
    state.questionToEdit = null
  },

  [QUESTION_BUILDER_SHOW]: (state) => {
    state.showQuestionBuilder = true
  },

  [QUESTION_BUILDER_SET_EDIT_SURVEY]: (state, question) => {
    state.questionToEdit = question
  }
}
