import React from 'react'
import { Image, Text, TouchableHighlight } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import connect from '../../config/connect'
import styles from './styles'
import { red, red1, red2 } from '../../assets/colors'

const Header = (props) => {

  const renderBack = () => {
    return props.onBack ? (
      <TouchableHighlight onPress={ () => props.onBack() } activeOpacity={ 0.6 } underlayColor={ 'transparent' }>
        <Image
          source={ require('../../assets/backArrow.png') }
          style={ styles.backArrow }
        />
      </TouchableHighlight>
    ) : null
  }

  const renderForward = () => {
    return props.onForward ? (
      <TouchableHighlight onPress={ () => props.onForward() } activeOpacity={ 0.6 } underlayColor={ 'transparent' }>
        <Image
          source={ require('../../assets/forwardArrow.png') }
          style={ styles.forwardArrow }
        />
      </TouchableHighlight>
    ) : null
  }

  return (
    <LinearGradient colors={ [red, red1, red2] } style={ styles.header }>
      { renderBack() }
      <Text style={ styles.headerText }>{ 'Create New Account' }</Text>
      { renderForward() }
    </LinearGradient>
  )
}

export default connect({
})(Header)
