import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {View} from 'react-native';
import {StatusBar} from 'expo-status-bar'

class Username extends React.Component{
    constructor(props){
            super(props);
            this.state={

            }
    }

    render(){
        return(
            <View style={{flex:1}}>
             <LinearGradient style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center'}} locations={[0.5,1]}colors={['#E3DDFA','#fff']}>
            <StatusBar style="dark"/>
             </LinearGradient>
            </View>
        )
    }
}

export default Username