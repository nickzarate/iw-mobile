import React from 'react'
import { Text } from 'react-native'
import styles from '../styles'
import connect from '../../config/connect'

const More = (props) => {
  return (
    <Text style={ styles.text }>{ 'Insert More Information' }</Text>
  )
}

export default connect({
})(More)
