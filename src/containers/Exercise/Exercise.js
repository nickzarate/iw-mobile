import React from 'react'
import { Text } from 'react-native'
import { styles } from '../../layouts/User'
import connect from '../../config/connect'

const Exercise = (props) => {
  return (
    <Text style={ styles.text }>{ 'Insert Exercise Information' }</Text>
  )
}

export default connect({
})(Exercise)
