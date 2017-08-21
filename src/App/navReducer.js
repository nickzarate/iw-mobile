import { StackNavigation } from 'react-navigation'
import { AppNavigator } from './App'

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Login'))

export default function nav(state = initialState, action) {
  const nextState = AppNavigator.router.getStateForAction(action, state)
  return nextState || state
}
