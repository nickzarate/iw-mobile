import { LOGIN_SUCCESS, LOGIN_LOADING, LOGIN_ERROR } from './constants'
import { NavigationActions } from 'react-navigation'

/*
 *  Login the user with the specified email and password
 */
export function login(email, password) {
  return (dispatch, getState, api) => {
    dispatch(loginLoad())

    api.makeGetRequest('login', { email, password }).then((res) => {
      console.log(res)
      if (!res.error) {
        dispatch(loginSuccess())
      } else {
        dispatch(loginError(res.error))
      }
    })
  }
}

/*
 *  Reset navigation when the user logs in so that they cannot
 *  navigate back to the 'Login' page without signing out
 */
export function resetToHome() {
  return (dispatch) => {
    const reset = NavigationActions.reset({
      index: 0,
      actions: [ NavigationActions.navigate({ routeName: 'Home' }) ]
    })

    dispatch(reset)
  }
}

/*
 *  Login was successful
 */
export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS
  }
}

/*
 *  There was an error logging in
 */
export function loginError(error) {
  return {
    type: LOGIN_ERROR,
    error: error
  }
}

/*
 *  Waiting for the 'login' API call to complete
 */
export function loginLoad() {
  return {
    type: LOGIN_LOADING
  }
}
