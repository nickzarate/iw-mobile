import React from 'react'
import { Provider } from 'react-redux'

import store from './config/store'
import App from './App'

export default class IronWill extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <App />
      </Provider>
    )
  }
}
