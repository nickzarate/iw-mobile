import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import connect from '../../config/connect'
import ProgressBar from './ProgressBar'
import styles from './styles'

const Signup5 = (props) => {
  return (
    <View style={ { flex: 1 } }>
      <ProgressBar bars={ 5 } />
      <Text style={ styles.information }>{ 'Account information' }</Text>
      <Button style={ { height: 200 } } title='Get Started' onPress={ () => props.navigation.navigate('Nutrition') } />
    </View>
  )
}

export default connect({
})(Signup5)
