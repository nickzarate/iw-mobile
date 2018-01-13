import Login from '../Auth/Login/route'
import { Signup1, Signup2, Signup3, Signup4, Signup5 } from '../Auth/Signup/route'
import HomeNavigator from '../Home'
import { StackNavigator } from 'react-navigation'

export default AuthNavigator = StackNavigator({
  Login,
  Signup1,
  Signup2,
  Signup3,
  Signup4,
  Signup5,
  Home: {
    screen: HomeNavigator,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  }
})
