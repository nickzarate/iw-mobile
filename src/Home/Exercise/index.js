import Exercise from './Exercise'
import { StackNavigator } from 'react-navigation'

export default ExerciseNavigator = {
  screen: StackNavigator({
    Exercise: {
      screen: Exercise,
      navigationOptions: ({ navigation }) => ({
        header: null
      })
    }
  })
}
