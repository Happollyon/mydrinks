import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native'
import {StatusBar} from 'expo-status-bar'
import { DarkTheme } from '@react-navigation/native';
import {LinearGradient } from 'expo-linear-gradient'
import AsyncStorage from '@react-native-async-storage/async-storage';

class Splash extends React.Component{
    constructor(props)  {
        super(props);
        this.state = {
        }
    }

    // this page makes sure that the Splash.js is visible for at least 5 secs. 
    async componentDidMount()
    {   
       let logged
        // gets if user is already logged from local storage.
        try { 
            
            logged = await AsyncStorage.getItem('logged')
            
        }catch(e){
                console.log(e)
        }
        
        if(logged=='true'){
            // if logged the user is sent to main screen
            this.props.navigation.navigate('SearchStack')
        }else{

            // if not user is sent to login screen. 
            this.timeoutHandle = setTimeout(()=>{
            // Add your logic for the transition
            this.props.navigation.navigate('Welcome') // what to push here?
        }, 5000);
    }
    
}
    // Before the component closes the timer is cleared.
    componentWillUnmount(){
        clearTimeout(this.timeoutHandle); 
    }
    render(){
        return(
        <View style={style.container}>
            <StatusBar style={'dark'}/>
            <LinearGradient style={style.gradient} locations={[0.5,1]}colors={['#E3DDFA','#fff']}>
                <View style={{width:'65,81%',aspectRatio:1.4,flexDirection:'row'}}>
                    <Image style={{width:'100%',height:'100%'}}source={require('../assets/logo.png')}/>
                </View>

            </LinearGradient>
        </View>)
    }

}
const style = StyleSheet.create({
 container:{
    backgroundColor:'blue',
    flex:1   
},gradient:{
    flex:1,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center'
}
})
export default Splash