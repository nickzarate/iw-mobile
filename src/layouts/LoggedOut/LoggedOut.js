import React from 'react'
import { Text, View } from 'react-native'
import styles from '../LoggedIn/styles'

export default class LoggedOut extends React.Component {
  render() {
    // The tabbed application will go here...
    return (
      <View>
        <Text style={ styles.text }>{ 'You are not logged in' }</Text>
      </View>
    )
  }
}
