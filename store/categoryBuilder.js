export const state = () => ({
  showCategoryBuilder: false,
  categoryName: ''
})

export const mutations = {
  hide: (state) => {
    state.showCategoryBuilder = false
    state.categoryName = ''
  },

  show: (state, categoryName) => {
    state.showCategoryBuilder = true
    state.categoryName = categoryName
  }
}

export const actions = {
  showCategoryBuilder: ({ commit }, categoryName) => {
    commit('show', categoryName)
  },

  cancelCategoryBuilder: ({ commit }) =>
    commit('hide')
}
