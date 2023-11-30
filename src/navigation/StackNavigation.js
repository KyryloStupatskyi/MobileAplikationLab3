import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Auth from "../pages/Auth";
import DrawerNavigation from "./DrawerNavigation";

const Stack = createStackNavigator()

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Auth} options={{ headerShown: false }} />
      <Stack.Screen name="Drawer" component={DrawerNavigation} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}
export default StackNavigation