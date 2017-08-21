import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import connect from '../../config/connect'
import ProgressBar from './ProgressBar'
import styles from './styles'

const Signup2 = (props) => {
  return (
    <View style={ { flex: 1 } }>
      <ProgressBar bars={ 2 } />
      <Text style={ styles.information }>{ 'Information here' }</Text>
      <Button style={ { height: 200 } } title='Next' onPress={ () => props.navigation.navigate('Signup3') } />
    </View>
  )
}

export default connect({
})(Signup2)
