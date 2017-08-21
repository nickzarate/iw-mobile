import React from 'react'
import { View } from 'react-native'
import connect from '../../config/connect'
import styles from './styles'

const ProgressBar = (props) => {
  const numBars = 5

  const renderProgress = () => {
    var bars = []
    for (var i = 0; i < props.bars; i++) {
      bars.push(<View key={ i } style={ styles.blueBar } />)
    }
    for (var i = numBars; i > props.bars; i--) {
      bars.push(<View key={ i } style={ styles.whiteBar } />)
    }
    return bars
  }

  return (
    <View style={ styles.progressBarContainer }>
      { renderProgress() }
    </View>
  )
}

export default connect({
  'state': 'nav'
})(ProgressBar)
