export const state = () => ({
  surveys: []
})

export const mutations = {
  setSurveys: (state, surveys) => {
    state.surveys = surveys
  },

  setSurvey: (state, survey) => {
    state.surveys = state.surveys.filter(svy => svy.surveyId !== survey.surveyId)

    state.surveys = [
      survey,
      ...state.surveys
    ]
  }
}

export const actions = {
  setSurveys: ({ commit }, surveys) => {
    commit('setSurveys', surveys)
  },
  setSurvey: ({ commit }, survey) => {
    commit('setSurvey', survey)
  }
}
