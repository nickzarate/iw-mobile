import React from 'react'
import { Text } from 'react-native'
import styles from '../styles'
import connect from '../../config/connect'

const Nutrition = (props) => {
  return (
    <Text style={ styles.text }>{ 'Insert Nutrition Information' }</Text>
  )
}

export default connect({
})(Nutrition)
