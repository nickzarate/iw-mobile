import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import connect from '../../config/connect'
import ProgressBar from './ProgressBar'
import styles from './styles'

const Signup3 = (props) => {
  return (
    <View style={ { flex: 1 } }>
      <ProgressBar bars={ 3 } />
      <Text style={ styles.information }>{ 'Activity information' }</Text>
      <Button style={ { height: 200 } } title='Next' onPress={ () => props.navigation.navigate('Signup4') } />
    </View>
  )
}

export default connect({
})(Signup3)
