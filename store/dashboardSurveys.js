import { DASHBOARD_SET_SURVEYS } from '@/store/mutations.constants'

export const state = () => ({
  surveys: []
})

export const mutations = {
  [DASHBOARD_SET_SURVEYS]: (state, surveys) => {
    state.surveys = surveys
  }
}

export const actions = {
  setSurvey: ({ commit, state }, survey) => {
    let surveys = state.surveys.filter(svy => svy.surveyId !== survey.surveyId)

    surveys = [
      survey,
      ...state.surveys
    ]

    commit(DASHBOARD_SET_SURVEYS, surveys)
  }
}
