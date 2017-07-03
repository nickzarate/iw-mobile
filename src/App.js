import React from 'react'
import { Button } from 'react-native'
import { createStructuredSelector } from 'reselect'
import connect from './config/connect'
import { login } from './actions/'

import User from './layouts/User'
import Auth from './layouts/Auth'


const loggedIn = createStructuredSelector({
  loggedIn: (state) => state.onboarding.loggedIn
})

const App = (props) => {
  console.log(props)
  if (props.loggedIn)
    return <User />
  else
    return <Auth />
}

export default connect({
  selector: loggedIn,
  actions: { login },
})(App)
