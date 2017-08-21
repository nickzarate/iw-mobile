import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import connect from '../../config/connect'
import ProgressBar from './ProgressBar'
import styles from './styles'
import { cream } from '../../assets/colors'

const Signup1 = (props) => {
  return (
    <View style={ { flex: 1, backgroundColor: cream } }>
      <ProgressBar bars={ 1 } />
      <Text style={ { height: 60, paddingHorizontal: 40 } }>{ 'How many calories do you consume each day to maintain your current weight?' }</Text>
      <TextInput
        placeholder='Cal'
        style={ { height: 20, paddingHorizontal: 40 } }
      />
      <Button title="I don't know! Find out for me please." onPress={ () => props.navigation.navigate('Signup2') } />
      <Button style={ { height: 200 } } title='Next' onPress={ () => props.navigation.navigate('Signup4') } />
    </View>
  )
}

export default connect({
})(Signup1)
