import { StyleSheet } from 'react-native'

import { red, gray, darkGray } from '../../assets/colors'

export default StyleSheet.create({
  button: {
    borderRadius: 20,
    height: 40,
    width: 275,
    marginTop: 25,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
    margin: 10,
    backgroundColor: 'transparent',
  },
  container: {
    backgroundColor: darkGray,
    flex: 1,
    paddingHorizontal: 50,
    paddingTop: 50,
  },
  error: {
    color: red,
    fontSize: 12,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    borderColor: 'white',
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: 'white',
    height: 40,
    marginTop: 25,
    textAlign: 'center',
    color: 'black'
  },
  logo: {
    color: 'white',
    paddingVertical: 70,
    textAlign: 'center',
  },
  text: {
    color: gray,
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5,
  }
})
