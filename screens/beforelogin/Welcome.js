import React from "react";
import {View,Text,Image} from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

class Welcome extends React.Component{

constructor(props){
    super(props);
    this.state = {

    }
}
async UNSAFE_componentWillMount(){
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
}
render(){
    return(
    <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
       
       <View style={{flexDirection:'column',alignItems:'center',justifyContent:'center', width:'100%',aspectRatio:0.94}}>
            <View style={{ width:'85%',aspectRatio:1.25,}}>
                <Image style={{width:'100%',height:'100%'}} source={require('../assets/welcomeArt.png')}/>
            </View>
       </View>

       <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center', width:'100%',aspectRatio:0.90}}>
            
            <View style={{width:'86.25%',flexDirection:'column',justifyContent:'center',alignItems:'center',aspectRatio:2.11}}>
                <Text style={{fontWeight:'bold',color:'#0038A2',fontSize:RFPercentage(5)}}>
                    Lets get started!
                </Text>
                <Text style={{color:'#0038A2',fontSize:RFPercentage(2.5)}}>
                  Register or Login to access
                </Text> 
                <Text style={{color:'#0038A2',fontSize:RFPercentage(2.5)}}>
                 Thousands of recipes
                </Text>
            </View>
       </View>
    </View>)
}
}

export default Welcome