import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native'
import {StatusBar} from 'expo-status-bar'
import { DarkTheme } from '@react-navigation/native';
import {LinearGradient } from 'expo-linear-gradient'

class Splash extends React.Component{
    constructor(props)  {
        super(props);
        this.state = {
        }
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