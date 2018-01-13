import React from 'react'
import { View, Text, Button } from 'react-native'
import styles from './styles'
import connect from '../../config/connect'

const NutritionHeader = (props) => {
  return (
    <View style={ styles.headerContainer }>
      <Text style={ styles.headerContent }>{ 'Nutrient Information will go here' }</Text>
      <Button style={ styles.headerContent } title='More Icon' onPress={ () => console.log('Should navigate') } />
    </View>
  )
}

export default connect({
})(NutritionHeader)
