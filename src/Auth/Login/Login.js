import React from 'react'
import { Text, View, TextInput, Image, TouchableHighlight } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import styles from './styles'
import connect from '../../config/connect'
import { login } from './actions'
import { red, red1, red2 } from '../../assets/colors'

const Login = (props) => {
  var email
  var password

  const handleLogin = () => {
    props.actions.login(email._lastNativeText, password._lastNativeText)
  }

  return (
    <View style={ styles.container }>
      <Image source={ require('../../assets/icon.png') } style={ styles.icon } />
      <Text style={ styles.error }>{ props.login.loginError }</Text>
      <TextInput
        autoCapitalize='none'
        autoCorrect={ false }
        keyboardType='email-address'
        placeholder='email'
        ref={ (v) => (email = v) }
        returnKeyType='next'
        style={ styles.input }
        underlineColorAndroid='transparent'
      />
      <TextInput
        autoCorrect={ false }
        placeholder='password'
        ref={ (v) => (password = v) }
        secureTextEntry={ true }
        style={ styles.input }
        underlineColorAndroid='transparent'
      />
      <TouchableHighlight onPress={ () => handleLogin() } activeOpacity={ 0.6 } underlayColor={ 'transparent' }>
        <LinearGradient colors={ [red, red1, red2] } style={ styles.button }>
          <Text style={ styles.buttonText }>{ 'Log In' }</Text>
        </LinearGradient>
      </TouchableHighlight>
      <Text style={ styles.forgotPassword }>{ 'Forgot Password?' }</Text>
      <Text onPress={ () => props.navigation.navigate('Signup1') } style={ styles.createAccount }>{ 'Create an Account' }</Text>
    </View>
  )
}

export default connect({
  state: 'login',
  actions: { login }
})(Login)
