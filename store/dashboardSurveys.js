import {
  DASHBOARD_SET_SURVEYS,
  DASHBOARD_DELETE_SURVEY
} from '@/store/mutations.constants'

export const state = () => ({
  surveys: []
})

export const mutations = {
  [DASHBOARD_SET_SURVEYS]: (state, surveys) => {
    state.surveys = surveys
  },

  [DASHBOARD_DELETE_SURVEY]: (state, surveyId) => {
    state.surveys = state.surveys.filter(svy => svy.surveyId !== surveyId)
  }
}

export const actions = {
  setSurvey: ({ commit, state }, survey) => {
    let surveys = state.surveys.filter(svy => svy.surveyId !== survey.surveyId)

    surveys = [
      survey,
      ...surveys
    ]

    commit(DASHBOARD_SET_SURVEYS, surveys)
  }
}
