import {
  CATEGORY_BUILDER_SHOW,
  CATEGORY_BUILDER_HIDE
} from '@/store/mutations.constants'

export const state = () => ({
  showCategoryBuilder: false,
  categoryName: '',
  categoryDescription: '',
  colourCode: ''
})

export const mutations = {
  [CATEGORY_BUILDER_HIDE]: (state) => {
    state.showCategoryBuilder = false
    state.categoryName = ''
    state.categoryDescription = ''
  },

  [CATEGORY_BUILDER_SHOW]: (state, { categoryName, categoryDescription, colourCode }) => {
    state.showCategoryBuilder = true
    state.categoryName = categoryName
    state.categoryDescription = categoryDescription
    state.colourCode = colourCode
  }
}

export const actions = {
  showCategoryBuilder: ({ commit }, { categoryName, categoryDescription, colourCode }) => {
    commit([CATEGORY_BUILDER_SHOW], { categoryName, categoryDescription, colourCode })
  }
}
