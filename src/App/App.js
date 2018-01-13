import React from 'react'
import { createStructuredSelector } from 'reselect'
import connect from '../config/connect'
import { addNavigationHelpers } from 'react-navigation'
import AppNavigator from '../Auth'

/* Root of the entire application */
const App = (props) => {
  return (
    <AppNavigator navigation={ addNavigationHelpers({
      dispatch: props.dispatch,
      state: props.nav
    })} />
  )
}

export default connect({
  selector: createStructuredSelector({ nav : (state) => state.nav })
})(App)

export { AppNavigator }
