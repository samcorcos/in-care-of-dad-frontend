import _ from 'lodash'
import { combineReducers } from 'redux'

function user(state={}, action) {
  switch (action.type) {
    case "USER_NEW":
      return _.assign({}, state, {
        email: action.payload.user.email
      })
    case "USER_LOGIN":
      return _.assign({}, state, {
        email: action.payload.user.email
      })
    default: return state
  }
}

const reducers = combineReducers({
  user
})

export default reducers
