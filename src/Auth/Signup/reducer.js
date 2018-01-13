import { RESET_ERROR_TDEE, SET_CONTINUE, SET_GENDER, SET_ERROR_TDEE, SET_TDEE, SET_USER_CHARACTERISTICS } from './constants'

const initialState = {
  tdee: 0,
  tdeeError: '',
  gender: 'male',
  height: '',
  weight: 0,
  birthdate: '',
  continue: false,
}

export default function signup(state = initialState, action) {
  switch (action.type) {
  case RESET_ERROR_TDEE:
    var newState = Object.assign({}, state)
    newState.tdeeError = ''
    return newState
  case SET_CONTINUE:
    var newState = Object.assign({}, state)
    newState.continue = action.continue
    return newState
  case SET_GENDER:
    var newState = Object.assign({}, state)
    newState.gender = action.gender
    return newState
  case SET_ERROR_TDEE:
    var newState = Object.assign({}, state)
    newState.tdeeError = action.tdeeError
    return newState
  case SET_TDEE:
    var newState = Object.assign({}, state)
    newState.tdee = action.tdee
    return newState
  case SET_USER_CHARACTERISTICS:
    var newState = Object.assign({}, state)
    newState.height = action.height
    newState.weight = action.weight
    newState.birthdate = action.birthdate
    return newState
  default:
    return state
  }
}
