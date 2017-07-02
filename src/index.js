import React from 'react'
import { Text, View, Button } from 'react-native'
import { Provider } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import store from './config/store'
import connect from './config/connect'
import { login } from './actions/'
import LoggedIn from './layouts/LoggedIn'



const loggedIn = createStructuredSelector({
  loggedIn: (state) => state.onboarding.loggedIn
})

const Content = (props) => {
  console.log(props)
  if (props.loggedIn)
    return <LoggedIn />
  else
    return <Button onPress={ props.actions.login } title="Not logged in" />
}

Content = connect({
  selector: loggedIn,
  actions: { login },
})(Content)



export default class IronWill extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <Content />
      </Provider>
    )
  }
}
