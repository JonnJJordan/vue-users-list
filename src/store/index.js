import { createStore } from 'vuex'
import actions from './actions'
import mutations from './mutations'
import plugins from './plugins'
import getters from './getters'

export default createStore({
  state: {
    users: [],
    selected: null,
    loading: false,
    error: null,
    filterKey: ''
  },
  actions,
  mutations,
  plugins,
  getters
})
