import { SET_USERS, SELECT_USER, IS_LOADING, HAS_ERROR, FILTER_USERS } from './types'

export default {
  [SET_USERS](state, users) {
    state.users = users
  },

  [SELECT_USER](state, user) {
    state.selected = user
  },

  [IS_LOADING](state, isLoading) {
    state.loading = isLoading
  },

  [HAS_ERROR](state, hasError) {
    state.error = hasError
  },

  [FILTER_USERS](state, key) {
    state.filterKey = key
  }
}
