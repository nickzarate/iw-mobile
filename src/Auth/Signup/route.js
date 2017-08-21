import React from 'react'
import ProgressHeader from './ProgressHeader'
import Page1 from './Signup1'
import Page2 from './Signup2'
import Page3 from './Signup3'
import Page4 from './Signup4'
import Page5 from './Signup5'

export const Signup1 = {
  screen: Page1,
  navigationOptions: ({ navigation }) => ({
    header: <ProgressHeader forward back />
  })
}

export const Signup2 = {
  screen: Page2,
  navigationOptions: ({ navigation }) => ({
    header: <ProgressHeader forward back />
  })
}

export const Signup3 = {
  screen: Page3,
  navigationOptions: ({ navigation }) => ({
    header: <ProgressHeader forward back />
  })
}

export const Signup4 = {
  screen: Page4,
  navigationOptions: ({ navigation }) => ({
    header: <ProgressHeader forward back />
  })
}

export const Signup5 = {
  screen: Page5,
  navigationOptions: ({ navigation }) => ({
    header: <ProgressHeader back />
  })
}
