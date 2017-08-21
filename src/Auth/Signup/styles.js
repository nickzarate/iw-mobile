import { StyleSheet } from 'react-native'
import { red } from '../../assets/colors'

const barWidth = 10
const barHeight = 10
const dotMargin = 7

export default StyleSheet.create({
  blueBar: {
    width: barWidth,
    height: barHeight,
    borderRadius: 10,
    backgroundColor: red,
    marginHorizontal: dotMargin,
  },
  progressBarContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    height: 40,
    padding: 40,
  },
  progressHeaderContainer: {
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
    height: 60,
  },
  progressHeaderText: {
    fontSize: 16,
    backgroundColor: 'transparent',
    color: 'white',
  },
  whiteBar: {
    width: barWidth,
    height: barHeight,
    borderRadius: 10,
    backgroundColor: 'white',
    marginHorizontal: dotMargin,
  },
  information: {
    alignSelf: 'center',
    paddingVertical: 50
  }
})
