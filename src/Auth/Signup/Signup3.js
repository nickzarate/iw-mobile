import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import connect from '../../config/connect'
import ProgressBar from './ProgressBar'
import styles from './styles'
import Header from './Header2'

const Signup3 = (props) => {

  const handleNext = () => {
    console.log(props)
    props.navigation.navigate('Signup4')
  }

  return (
    <View style={ styles.container }>
      <Header onForward={ () => handleNext() } onBack={ () => props.navigation.goBack() } />
      <ProgressBar bars={ 3 } />

    </View>
  )
}

export default connect({
  state: 'nav'
})(Signup3)
