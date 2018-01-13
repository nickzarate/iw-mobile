import React from 'react'
import { View, Text, TextInput, TouchableHighlight } from 'react-native'
import connect from '../../config/connect'
import ProgressBar from './ProgressBar'
import styles from './styles'
import { cream } from '../../assets/colors'
import Icon from 'react-native-vector-icons/Octicons'
import Header from './Header2'
import { submitTDEE } from './actions'

const Signup1 = (props) => {
  console.log(props)
  var tdee

  const handleNext = () => {
    props.actions.submitTDEE(tdee._lastNativeText)
  }

  return (
    <View style={ styles.container }>
      <Header onForward={ () => handleNext() } onBack={ () => props.navigation.goBack() } />
      <ProgressBar bars={ 1 } />
      <Text style={ styles.title }>{ 'What is your TDEE (Total Daily Energy Expenditure)?' }</Text>
      <TouchableHighlight style={ styles.infoIcon } onPress={ () => console.log('icon touched') } activeOpacity={ 0.6 } underlayColor='transparent'>
        <Icon name="info" size={ 20 } color="black" />
      </TouchableHighlight>
      <Text>{ props.signup.tdeeError }</Text>
      <TextInput
        placeholder='kCal'
        ref={ (v) => (tdee = v) }
        style={ styles.tdeeInput }
        underlineColorAndroid='transparent'
      />
      <TouchableHighlight
        activeOpacity={ 0.6 }
        onPress={ () => props.navigation.navigate('Signup2') }
        style={ styles.smallTextLayout }
        underlayColor={ 'transparent'}
      >
        <Text style={ styles.smallText }>{ 'Not sure? Click here to find out.' }</Text>
      </TouchableHighlight>
      <TouchableHighlight
        activeOpacity={ 0.6 }
        onPress={ () => handleNext() }
        style={ props.signup.continue ? styles.activatedContinueButton : styles.deactivatedContinueButton }
        underlayColor={ 'transparent' }
      >
        <Text style={ props.signup.continue ? styles.activatedContinueText : styles.deactivatedContinueText }>{ 'Continue' }</Text>
      </TouchableHighlight>
    </View>
  )
}

export default connect({
  actions: { submitTDEE },
  state: 'signup'
})(Signup1)
