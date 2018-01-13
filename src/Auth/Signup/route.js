import React from 'react'
import Header from './Header'
import Page1 from './Signup1'
import Page2 from './Signup2'
import Page3 from './Signup3'
import Page4 from './Signup4'
import Page5 from './Signup5'

export const Signup1 = {
  screen: Page1,
  navigationOptions: ({ navigation }) => ({
    header: null
  })
}

export const Signup2 = {
  screen: Page2,
  navigationOptions: ({ navigation }) => ({
    header: null
  })
}

export const Signup3 = {
  screen: Page3,
  navigationOptions: ({ navigation }) => ({
    header: null
  })
}

export const Signup4 = {
  screen: Page4,
  navigationOptions: ({ navigation }) => ({
    header: <Header onForward={ () => navigation.navigate('Signup5') } onBack={ () => navigation.goBack() } />
  })
}

export const Signup5 = {
  screen: Page5,
  navigationOptions: ({ navigation }) => ({
    header: <Header onBack={ () => navigation.goBack() } />
  })
}
