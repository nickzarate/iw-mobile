import { LOGIN_SUCCESS } from './constants'

export function login(email, password) {
  return (dispatch) => {
    dispatch(process_login)
  }
  return {
    type: LOGIN_SUCCESS
  }
}
