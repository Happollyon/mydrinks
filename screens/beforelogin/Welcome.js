import React from "react";
import {View,Text,Image} from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native-gesture-handler";
import {StatusBar} from 'expo-status-bar';
import {LinearGradient } from 'expo-linear-gradient'

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
    <View style={{flex:1}}>
      <LinearGradient style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center'}} locations={[0.5,1]}colors={['#E3DDFA','#fff']}>
       <StatusBar style={'dark'}/>
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
            <View style={{width:'86.25%',aspectRatio:2.11,flexDirection:'column',justifyContent:'space-around',alignItems:'center'}}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Username')} style={{width:'96%',aspectRatio:5.71,backgroundColor:'#7966FF',borderRadius:RFPercentage(5),flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color:'white',fontSize:RFPercentage(3)}}>
                        Create Account
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')} >
                   <Text style={{color:'#7966FF',fontSize:RFPercentage(3)}}>Login to account</Text>
                </TouchableOpacity>
            </View>
       </View>
       </LinearGradient> 
    </View>)
}
}

export default Welcome