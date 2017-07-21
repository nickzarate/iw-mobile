import React from 'react'
import { Text, View } from 'react-native'
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view'
import connect from '../../config/connect'
import Nutrition from '../../containers/Nutrition'
import Exercise from '../../containers/Exercise'
import Progress from '../../containers/Progress'
import More from '../../containers/More'

const User = (props) => {
  return (
    <ScrollableTabView
      DefaultTabBar={ () => <DefaultTabBar /> }
      locked
      scrollWithoutAnimation
      style={ { marginTop: 20 } }
      tabBarPosition='bottom'
    >
      <Nutrition tabLabel='Nutrition' />
      <Exercise tabLabel='Exercise' />
      <Progress tabLabel='Progress' />
      <More tabLabel='More' />
    </ScrollableTabView>
  )
}

export default connect({
})(User)
