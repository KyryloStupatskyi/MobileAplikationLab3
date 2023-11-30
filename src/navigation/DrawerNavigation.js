import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import { View } from 'react-native'
import AddProducts from '../pages/AddProducts'
import List from '../pages/List'

const Drawer = createDrawerNavigator()

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='List' component={List} />
      <Drawer.Screen name='Add' component={AddProducts} />
    </Drawer.Navigator>
  )
}
export default DrawerNavigation