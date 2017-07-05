import React from 'react'
import { Text, View } from 'react-native'
import styles from './styles'

export default class User extends React.Component {
  render() {
    // The tabbed application will go here...
    return (
      <View>
        <Text style={ styles.text }>{ 'Congratulations! You are logged in' }</Text>
      </View>
    )
  }
}
