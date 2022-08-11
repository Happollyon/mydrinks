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
import Password from './screens/beforelogin/Password';
import ConfirmPassword from './screens/beforelogin/ConfirmPassword';
import Login from './screens/beforelogin/Login';
// screens after login
import Home from './screens/afterlogin/Home';
import { enableScreens } from 'react-native-screens';
import SearchStack from './screens/afterlogin/SearchStack/SearchStack';
enableScreens();
const Stack = createStackNavigator(); 

class App extends React.Component {
  constructor(props){
        super(props);
        this.state={
            results:''
        }

    this.loadFavorites =  this.loadFavorites.bind(this)
  }
  /**
     * this function is called in componentDidmount to load liked drinks the first time. 
     * then this function is passed the following components:
     * App.js -> SearchStack -> Home -> FavoriteStack -> Body -> Item-> Recipe: When the recipe screen is about to unmount, this function is called 
     * but its only called if the user has liked or disked a drink. 
     * this way, when user return to this screen, it will have been updated to reflect the actions take in 
     * the receipe screen. 
     * **/
   async loadFavorites(){
           
    /**
     * When function was being called in Recipe screen and the drink had been disliked 
     * the drink would still remain in the ui, because the results state still had it. 
     * now the state is set to null before its populated.
     * 
     * **/
    this.setState({results:''})
    
    const response =  fetch('https://mydrinks123.herokuapp.com/selectliked/44').then(response =>{
        response.json().then(response =>{
        
            response.liked_drinks.map(item => {
                return fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='+item.drink_id).then(response=>{ 
                 
                    response.json().then(response =>{
                        
                        this.setState({ results: [...this.state.results, response.drinks[0]] })
                       
                       
                        
                    })
                })
            })
            
        })
     
    })

   


}
componentDidMount(){
  this.loadFavorites()
  console.log(this.props.navigation + ' app.js')

}
  async Unsefa_componentWillMount(){
		await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
	}
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Splash' screenOptions={{}}>
          <Stack.Screen name='Splash' options={{headerShown:false}} component={Splash}/ >
          <Stack.Screen name='Welcome' component={Welcome} options={{headerShown:false}}/>  
          <Stack.Screen name='Username' navigation={this.navigation} component={Username} options={{headerShown:false}}/>
          <Stack.Screen name="Password" component={Password} options={{headerShown:false}}/>
          <Stack.Screen name="ConfirmPassword" component={ConfirmPassword} options={{headerShown:false}}/>
          <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
          <Stack.Screen children={()=><SearchStack results ={this.state.results} navigation={this.props.navigation}loadFavorites={this.loadFavorites} />} name="SearchStack"   
              options={{headerShown:false,gestureEnabled:false}}
          />
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
export default App