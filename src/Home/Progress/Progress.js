import React from 'react'
import { Text } from 'react-native'
import styles from '../styles'
import connect from '../../config/connect'

const Progress = (props) => {
  return (
    <Text style={ styles.text }>{ 'Insert Progress Information' }</Text>
  )
}

export default connect({
})(Progress)
