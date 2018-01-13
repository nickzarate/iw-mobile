import { StyleSheet } from 'react-native'
import { red, red3, gray, cream, cream2 } from '../../assets/colors'
import { sf, sw, sh } from '../../utils/scale'

const barWidth = 15
const barHeight = 15
const dotMargin = 7
const inputTopMargin = 27

export default StyleSheet.create({
  backArrow: {
    height: sh(3),
    width: sw(6),
    // color: red3
  },
  filledDot: {
    width: barWidth,
    height: barHeight,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: red,
    backgroundColor: red,
    marginHorizontal: dotMargin,
  },
  container: {
    backgroundColor: cream,
    flex: 1,
    paddingHorizontal: sw(12),
    paddingTop: sh(8),
  },
  forwardArrow: {
    height: sh(3),
    width: sw(6),
  },
  infoIcon: {
    top: sh(inputTopMargin, 10),
    marginLeft: sw(82),
    position: 'absolute',
    zIndex: 1,
    backgroundColor: 'transparent',
  },
  inputTitle: {
    fontSize: sf(16),
    marginLeft: sw(3),
    marginTop: sh(6),
    marginBottom: sh(1),
  },
  personalInfoInput: {
    height: 40,
    color: 'black',
    width: sw(80),
    borderRadius: 20,
    backgroundColor: 'white',
    textAlign: 'center',
    alignSelf: 'center',
  },
  tdeeInput: {
    marginHorizontal: sw(10),
    borderColor: 'white',
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: 'white',
    height: 40,
    width: sw(80),
    marginTop: sh(inputTopMargin),
    textAlign: 'center',
    color: 'black',
    position: 'absolute',
    alignSelf: 'center',
  },
  progressBarContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    height: barHeight,
    // backgroundColor: red,
  },
  header: {
    justifyContent: 'space-between',
    paddingHorizontal: sw(5),
    alignItems: 'center',
    flexDirection: 'row',
    height: sh(10),
    width: sw(100),
    position: 'absolute',
  },
  header2: {
    justifyContent: 'space-between',
    paddingHorizontal: sw(5),
    alignItems: 'flex-end',
    flexDirection: 'row',
    height: sh(6),
    width: sw(100),
    position: 'absolute',
    backgroundColor: cream,
  },
  headerText: {
    fontSize: sf(15),
    backgroundColor: 'transparent',
    color: 'white',
  },
  smallText: {
    color: gray,
    fontSize: sf(12),
    fontStyle: 'italic',
  },
  smallTextLayout: {
    marginTop: sh(inputTopMargin, 45),
    marginLeft: sw(12),
    position: 'absolute',
  },
  title: {
    fontSize: sf(16),
    fontFamily: 'palatino',
    alignSelf: 'center',
    color: 'black',
    paddingVertical: sh(2),
    marginTop: sh(2),
  },
  emptyDot: {
    width: barWidth,
    height: barHeight,
    borderWidth: 2,
    borderColor: red,
    borderRadius: 10,
    backgroundColor: cream,
    marginHorizontal: dotMargin,
  },
  gender: {
    fontSize: 12,
    backgroundColor: 'transparent',
  },
  genderLayout: {
    width: sw(20),
    height: 40,
    borderRadius: 20,
    borderColor: 'black',
    marginHorizontal: sw(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  genderContainer: {
    flexDirection: 'row',
  },
  deactivatedContinueButton: {
    backgroundColor: 'gray',
    width: sw(75),
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'gray',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: sh(15),
  },
  activatedContinueButton: {
    backgroundColor: red3,
    width: sw(75),
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: cream,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: sh(15),
  },
  deactivatedContinueText: {
    color: 'gray',
    fontSize: sf(12),
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
  activatedContinueText: {
    color: 'white',
    fontSize: sf(12),
    textAlign: 'center',
    backgroundColor: 'transparent',
  }
})
