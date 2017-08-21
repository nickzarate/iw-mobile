import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import connect from '../../config/connect'
import ProgressBar from './ProgressBar'
import styles from './styles'

const Signup4 = (props) => {
  return (
    <View style={ { flex: 1 } }>
      <ProgressBar bars={ 4 } />
      <Text style={ styles.information }>{ 'Goal information' }</Text>
      <Button style={ { height: 200 } } title='Next' onPress={ () => props.navigation.navigate('Signup5') } />
    </View>
  )
}

export default connect({
})(Signup4)
