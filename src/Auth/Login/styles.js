import { StyleSheet } from 'react-native'
import { sf, sw, sh } from '../../utils/scale'
import { red, gray, darkGray } from '../../assets/colors'

export default StyleSheet.create({
  button: {
    borderRadius: 20,
    height: 40,
    width: sw(75),
    marginTop: sh(5),
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: sf(12),
    textAlign: 'center',
    marginVertical: sh(2),
    backgroundColor: 'transparent',
  },
  container: {
    backgroundColor: darkGray,
    flex: 1,
    paddingHorizontal: sw(12),
    paddingTop: sh(6),
  },
  error: {
    color: red,
    fontSize: sf(12),
  },
  input: {
    borderColor: 'white',
    borderRadius: 20,
    backgroundColor: 'white',
    height: 40,
    marginTop: sh(5),
    textAlign: 'center',
    color: 'black',
  },
  icon: {
    width: sw(50),
    height: sh(30),
    alignSelf: 'center',
  },
  forgotPassword: {
    color: gray,
    fontSize: sf(12),
    textAlign: 'center',
    marginTop: sh(1),
  },
  createAccount: {
    color: gray,
    fontSize: sf(12),
    alignSelf: 'center',
    backgroundColor: 'transparent',
    bottom: sh(2),
    position: 'absolute'
  },
})
