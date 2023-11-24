import { getUsers, getUser } from '../api/users'
import { FILTER_USERS, HAS_ERROR, IS_LOADING, SELECT_USER, SET_USERS } from './types'

export default {
  async getAllUsers({ commit }) {
    commit(IS_LOADING, true)
    getUsers()
      .then((result) => {
        const { data, error } = result
        if (error.value) {
          commit(HAS_ERROR, error.value)
        } else {
          commit(SET_USERS, data.value)
        }
      })
      .finally(() => {
        commit(IS_LOADING, false)
      })
  },

  async getSelectedUser({ commit }, id) {
    commit(IS_LOADING, true)
    getUser(id)
      .then((result) => {
        const { data, error } = result
        if (error.value) {
          commit(HAS_ERROR, error.value)
        } else {
          commit(SELECT_USER, data.value)
        }
      })
      .finally(() => {
        commit(IS_LOADING, false)
      })
  },

  setSelectedUser({ commit, state }, id) {
    const selectedUser = state.users.find((user) => user.id === id)

    commit(SELECT_USER, selectedUser)
  },

  changeFilterKey({ commit }, key) {
    commit(FILTER_USERS, key)
  }
}
