export const state = () => ({
  showCategoryBuilder: false,
  categoryName: '',
  categoryDescription: ''
})

export const mutations = {
  hide: (state) => {
    state.showCategoryBuilder = false
    state.categoryName = ''
    state.categoryDescription = ''
  },

  show: (state, { categoryName, categoryDescription }) => {
    state.showCategoryBuilder = true
    state.categoryName = categoryName
    state.categoryDescription = categoryDescription
  }
}

export const actions = {
  showCategoryBuilder: ({ commit }, { categoryName, categoryDescription }) => {
    commit('show', { categoryName, categoryDescription })
  },

  cancelCategoryBuilder: ({ commit }) =>
    commit('hide')
}
