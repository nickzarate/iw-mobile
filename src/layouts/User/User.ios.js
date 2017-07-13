import React from 'react'
import { Text, View, TabBarIOS } from 'react-native'
import styles from './styles'

export default class User extends React.Component {
  render() {
    // The tabbed application will go here...
    return (
      <View>
        <TabBarIOS>
          <TabBarIOS.Item systemIcon='history'>
            
          </TabBarIOS.Item>
          <TabBarIOS.Item systemIcon='bookmarks'>
          </TabBarIOS.Item>
          <TabBarIOS.Item systemIcon='search'>
          </TabBarIOS.Item>
          <TabBarIOS.Item systemIcon='more'>
          </TabBarIOS.Item>
        </TabBarIOS>
      </View>
    )
  }
}
