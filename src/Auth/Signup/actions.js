import { RESET_ERROR_TDEE, SET_CONTINUE, SET_GENDER, SET_ERROR_TDEE, SET_TDEE, SET_USER_CHARACTERISTICS } from './constants'
import { NavigationActions } from 'react-navigation'

const tdeeError = 'TDEE entered is not valid, try again'

/*
 *  Login the user with the specified email and password
 */
export function submitTDEE(tdee) {
  return (dispatch, getState, api) => {
    // TODO: Some kind of parameter check on tdee
    if (tdee > 500 && tdee < 10000) {
      dispatch(resetErrorTDEE())
      dispatch(setTDEE(tdee))
      dispatch(NavigationActions.navigate({ routeName: 'Signup4' }))
    }
    else
      dispatch(setErrorTDEE())
  }
}

/*
 *  Set flag indicating the user can continue to the next signup page
 */
export function setContinue(cont) {
  return {
    type: SET_CONTINUE,
    continue: cont
  }
}

/*
 *  Set user's TDEE
 */
export function setTDEE(tdee) {
  return {
    type: SET_TDEE,
    tdee
  }
}

export function setUserCharacteristics(height, weight, birthdate) {
  return {
    type: SET_USER_CHARACTERISTICS,
    height,
    weight,
    birthdate
  }
}

/*
 *  Set user's gender
 */
export function setGender(gender) {
  return {
    type: SET_GENDER,
    gender
  }
}

/*
 *  Set error message if the user enters an invalid TDEE
 */
export function setErrorTDEE() {
  return {
    type: SET_ERROR_TDEE,
    tdeeError
  }
}

/*
 *  Clear the TDEE error message
 */
export function resetErrorTDEE() {
  return {
    type: RESET_ERROR_TDEE
  }
}
