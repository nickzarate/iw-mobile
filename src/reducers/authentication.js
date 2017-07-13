import { LOGIN_SUCCESS, LOGIN_LOADING, LOGIN_ERROR } from '../actions/constants'

const initialState = {
  loggedIn: false,
  loginLoading: false,
  loginError: ''
}

export default function authentication(state = initialState, action) {
  switch (action.type) {
  case LOGIN_ERROR:
    var newState = Object.assign({}, state)
    newState.loginLoading = false
    newState.loginError = action.error
    return newState
  case LOGIN_LOADING:
    var newState = Object.assign({}, state)
    newState.loginLoading = true
    return newState
  case LOGIN_SUCCESS:
    var newState = Object.assign({}, state)
    newState.loggedIn = true
    newState.loginLoading = false
    return newState
  default:
    return state
  }
}
