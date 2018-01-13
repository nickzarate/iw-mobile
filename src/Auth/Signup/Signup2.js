import React from 'react'
import { View, Text, TextInput, TouchableWithoutFeedback } from 'react-native'
import connect from '../../config/connect'
import ProgressBar from './ProgressBar'
import styles from './styles'
import Header from './Header2'
import { red, red1, red2 } from '../../assets/colors'
import { setGender, setUserCharacteristics } from './actions'
import LinearGradient from 'react-native-linear-gradient'

const Signup2 = (props) => {
  var height
  var weight
  var birthdate

  const handleNext = () => {
    props.actions.setUserCharacteristics(height._lastNativeText, weight._lastNativeText, birthdate._lastNativeText)
    props.navigation.navigate('Signup3')
  }

  return (
    <View style={ styles.container }>
      <Header onForward={ () => handleNext() } onBack={ () => props.navigation.goBack() } />
      <ProgressBar bars={ 2 } />
      <Text style={ styles.title }>{ 'I am' }</Text>
      <View style={ styles.genderContainer }>
        <TouchableWithoutFeedback onPress={ () => props.actions.setGender('male') }>
          <LinearGradient colors={ props.signup.gender == 'male' ? [ red, red1, red2 ] : ['#ffffff', '#ffffff'] } style={ styles.genderLayout }>
            <Text style={ [styles.gender, { color: props.signup.gender == 'male' ? 'white' : 'black' }] }>
              { 'Male' }
            </Text>
          </LinearGradient>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={ () => props.actions.setGender('female') }>
          <LinearGradient colors={ props.signup.gender == 'female' ? [ red, red1, red2 ] : ['#ffffff', '#ffffff'] } style={ styles.genderLayout }>
            <Text style={ [styles.gender, { color: props.signup.gender == 'female' ? 'white' : 'black' }] }>
              { 'Female' }
            </Text>
          </LinearGradient>
        </TouchableWithoutFeedback>
      </View>
      <Text style={ styles.inputTitle }>{ 'Height' }</Text>
      <TextInput
        ref={ (v) => (height = v) }
        style={ styles.personalInfoInput }
        underlineColorAndroid='transparent'
      />
      <Text style={ styles.inputTitle }>{ 'Weight' }</Text>
      <TextInput
        ref={ (v) => (weight = v) }
        style={ styles.personalInfoInput }
        underlineColorAndroid='transparent'
      />
      <Text style={ styles.inputTitle }>{ 'Birth Date' }</Text>
      <TextInput
        ref={ (v) => (birthdate = v) }
        style={ styles.personalInfoInput }
        underlineColorAndroid='transparent'
      />
    </View>
  )
}

export default connect({
  state: 'signup',
  actions: { setGender, setUserCharacteristics }
})(Signup2)
