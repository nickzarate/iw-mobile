import React from 'react'
import { Text, View, TextInput, Button } from 'react-native'
import { styles } from './styles.js'
import connect from '../../config/connect'
import { login } from './actions'

const Login = (props) => {
  var email
  var password

  const handleLogin = () => {
    props.actions.login(email._lastNativeText, password._lastNativeText)
  }

  return (
    <View style={ styles.container }>
      <Text style={ styles.logo }>{ 'Insert IronWill Logo' }</Text>
      <Text style={ styles.error }>{ props.login.loginError }</Text>
      <TextInput
        autoCapitalize='none'
        autoCorrect={ false }
        keyboardType='email-address'
        placeholder='email'
        ref={ (v) => (email = v) }
        returnKeyType='next'
        style={ styles.input }
      />
      <TextInput
        autoCorrect={ false }
        placeholder='password'
        ref={ (v) => (password = v) }
        secureTextEntry={ true }
        style={ styles.input }
      />
      <Button onPress={ handleLogin } title='Log In' />
      <Text>{ 'Forgot Password?' }</Text>
      <Text>{ 'Don\'t have an account? SIGN UP' }</Text>
    </View>
  )
}

export default connect({
  state: 'login',
  actions: { login }
})(Login)
