import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-web';
import StackNavigation from './src/navigation/StackNavigation';
import { createContext } from 'react';

export const Context = createContext(null)

export default function App() {
  return (
    <Context.Provider value={{
      isAuth: false
    }}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </Context.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
