import React from 'react'
import { View, Image, Text, TouchableHighlight } from 'react-native'
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

  return (
    <View style={ styles.header2 }>
      { renderBack() }
    </View>
  )
}

export default connect({
})(Header)
