import React from 'react'
import { Image, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import connect from '../../config/connect'
import styles from './styles'
import { red, red1, red2 } from '../../assets/colors'

const ProgressHeader = (props) => {
  return (
    <LinearGradient colors={ [red, red1, red2] } style={ styles.progressHeaderContainer }>
      { props.back ? <Image source={ require('../../assets/arrowLeft.png') } style={{ width: 20, height: 20 }} /> : null }
      <Text style={ styles.progressHeaderText }>{ 'Create New Account' }</Text>
      { props.forward ? <Image source={ require('../../assets/arrowRight.png') } style={{ width: 20, height: 20 }} /> : null }
    </LinearGradient>
  )
}

export default connect({
  'state': 'nav'
})(ProgressHeader)
