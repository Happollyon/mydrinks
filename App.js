import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


// Screens berfore login 
import Splash from './screens/beforelogin/Splash';
// screens after login
const Stack = createStackNavigator(); 
export default class App extends React.Component {
  constructor(){
    super();
    this.state = {}
  }
  render(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Splash' component={Splash}/  >
      </Stack.Navigator>
    </NavigationContainer>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff'
  },
});
