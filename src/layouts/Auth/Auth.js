import React from 'react'
import { Text, View, TextInput, Button } from 'react-native'
import { styles } from './index.js'
import connect from '../../config/connect'
import { login } from '../../actions'

class Auth extends React.Component {
  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.logo }>{ 'Insert IronWill Logo' }</Text>
        <TextInput
          style={ styles.input }
          autocorrect={ false }
          keyboardType='email-address'
          placeholder='email'
          returnKeyType='next'
        />
        <TextInput
          style={ styles.input }
          autocorrect={ false }
          placeholder='password'
          secureTextEntry={ true }
        />
        <Button onPress={ this.props.actions.login } title='Log In' />
        <Text>{ 'Forgot Password?' }</Text>
        <Text>{ 'Don\'t have an account? SIGN UP' }</Text>
      </View>
    )
  }
}

export default connect({
  selector: '',
  actions: { login }
})(Auth)
