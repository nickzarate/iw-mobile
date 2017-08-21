import React from 'react'
import Nutrition from './Nutrition'
import { StackNavigator } from 'react-navigation'
import NutrientHeader from './NutrientHeader'

export default NutritionNavigator = {
  screen: StackNavigator({
    Nutrition: {
      screen: Nutrition,
      navigationOptions: ({ navigation }) => ({
        header: <NutrientHeader />
      })
    }
  })
}
