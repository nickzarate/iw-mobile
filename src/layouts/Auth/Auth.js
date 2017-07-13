import React from 'react'
import { Text, View, TextInput, Button } from 'react-native'
import { styles } from './index.js'
import connect from '../../config/connect'
import { login } from '../../actions'

class Auth extends React.Component {
  constructor(props) {
    super(props)
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin() {
    this.props.actions.login(this.email._lastNativeText, this.password._lastNativeText)
  }

  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.logo }>{ 'Insert IronWill Logo' }</Text>
        <Text style={ styles.error }>{ this.props.authentication.loginError }</Text>
        <TextInput
          autoCapitalize='none'
          autoCorrect={ false }
          keyboardType='email-address'
          placeholder='email'
          ref={ (v) => { this.email = v } }
          returnKeyType='next'
          style={ styles.input }
        />
        <TextInput
          autoCorrect={ false }
          placeholder='password'
          ref={ (v) => { this.password = v } }
          secureTextEntry={ true }
          style={ styles.input }
        />
        <Button onPress={ this.handleLogin } title='Log In' />
        <Text>{ 'Forgot Password?' }</Text>
        <Text>{ 'Don\'t have an account? SIGN UP' }</Text>
      </View>
    )
  }
}

export default connect({
  state: 'authentication',
  actions: { login }
})(Auth)
