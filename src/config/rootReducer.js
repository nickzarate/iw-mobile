import login from '../Auth/Login/reducer'
import nav from '../App/navReducer'
import signup from '../Auth/Signup/reducer'
import { combineReducers } from 'redux'

export default combineReducers({
  login,
  nav,
  signup
})
