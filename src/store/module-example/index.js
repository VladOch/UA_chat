import state from './state'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'
import users from './users'

export default {
  namespaced: true,
  actions,
  users,
  state
}
