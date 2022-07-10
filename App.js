import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import * as ScreenOrientation from 'expo-screen-orientation';

// Screens berfore login 
import Splash from './screens/beforelogin/Splash';
import Welcome from './screens/beforelogin/Welcome';
import Username from './screens/beforelogin/Username';
// screens after login
const Stack = createStackNavigator(); 
export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  
  async componentWillMount(){
		await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
	}
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Splash'>
          <Stack.Screen name='Splash' options={{headerShown:false}} component={Splash}/ >
          <Stack.Screen name='Welcome' component={Welcome} options={{headerShown:false}}/>  
          <Stack.Screen name='Username' component={Username}/>
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
