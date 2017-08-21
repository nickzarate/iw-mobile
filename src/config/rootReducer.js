import login from '../Auth/Login/reducer'
import nav from '../App/navReducer'
import { combineReducers } from 'redux'

export default combineReducers({
  login,
  nav
})
