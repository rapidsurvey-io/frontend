export const state = () => ({
  showCategoryBuilder: false,
  categoryName: '',
  categoryDescription: '',
  colourCode: ''
})

export const mutations = {
  hide: (state) => {
    state.showCategoryBuilder = false
    state.categoryName = ''
    state.categoryDescription = ''
  },

  show: (state, { categoryName, categoryDescription, colourCode }) => {
    state.showCategoryBuilder = true
    state.categoryName = categoryName
    state.categoryDescription = categoryDescription
    state.colourCode = colourCode
  }
}

export const actions = {
  showCategoryBuilder: ({ commit }, { categoryName, categoryDescription, colourCode }) => {
    commit('show', { categoryName, categoryDescription, colourCode })
  },

  cancelCategoryBuilder: ({ commit }) =>
    commit('hide')
}
