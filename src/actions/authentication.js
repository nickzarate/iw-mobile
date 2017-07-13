import { LOGIN_SUCCESS, LOGIN_LOADING, LOGIN_ERROR } from './constants'

export function login(email, password) {
  return (dispatch, getState, api) => {
    dispatch(loginLoad)

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

export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS
  }
}

export function loginError(error) {
  return {
    type: LOGIN_ERROR,
    error: error
  }
}

export function loginLoad() {
  return {
    type: LOGIN_LOADING
  }
}
