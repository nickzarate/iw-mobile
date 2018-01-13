import { TabNavigator } from 'react-navigation'
import Nutrition from './Nutrition'
import Exercise from './Exercise'
import Progress from './Progress'
import More from './More'

export default HomeNavigator = TabNavigator({
  Nutrition,
  Exercise,
  Progress,
  More,
}, {
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: false,
  lazy: true,
  tabBarOptions: {
    labelStyle: {
      fontSize: 11,
      marginBottom: 3
    }
  }
})
