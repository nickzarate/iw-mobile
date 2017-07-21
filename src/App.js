import React from 'react'
import { Button } from 'react-native'
import { createStructuredSelector } from 'reselect'
import connect from './config/connect'
import { login } from './layouts/Login/actions'

/* Import Layouts */
import User from './layouts/User'
import Login from './layouts/Login'

/* Root of the entire application */
const App = (props) => {
  return props.loggedIn ? <User /> : <Login />
}

export default connect({
  selector: createStructuredSelector({ loggedIn : (state) => state.login.loggedIn })
})(App)
