import React from 'react'
import { Button } from 'react-native'
import { createStructuredSelector } from 'reselect'
import connect from './config/connect'
import { login } from './actions'

import User from './layouts/User'
import Auth from './layouts/Auth'

const App = (props) => {
  return props.loggedIn ? <User /> : <Auth />
}

export default connect({
  selector: createStructuredSelector({ loggedIn : (state) => state.authentication.loggedIn })
})(App)
