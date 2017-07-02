import { LOGIN_SUCCESS } from '../actions/constants'

const initialState = {
  loggedIn: false
}

export default function onboarding(state = initialState, action) {
  switch (action.type) {
  case LOGIN_SUCCESS:
    return { loggedIn: true }
  default:
    return state
  }
}
