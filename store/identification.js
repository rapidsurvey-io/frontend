import { IDENTIFICATION_SET_IDENTIFIER } from '@/store/mutations.constants'

export const state = () => ({
  identifier: null
})

export const mutations = {
  [IDENTIFICATION_SET_IDENTIFIER]: (state, identifier) => {
    state.identifier = identifier
  }
}
