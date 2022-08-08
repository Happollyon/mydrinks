import React, { Profiler } from "react";
import{View,Text,Image,TouchableOpacity,TextInput} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
import { RFPercentage } from "react-native-responsive-fontsize";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";



class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
        this.logout = this.logout.bind(this)
    }
    async logout(){
        try{
            await AsyncStorage.setItem('logged','false')
        }catch(e){
            console.log('erro logout fucntion!')
        }
        this.props.navigation.navigate('Welcome')
    }

    render(){
        return(
            <LinearGradient style={{width:'100%',height:'100%',justifyContent:'space-around',alignItems:'center'}} locations={[0,0.3]} colors={['rgba(182,132,247,0.51)','#5960E6']}>
                <View style={{width:'46.36%',aspectRatio:1,borderWidth:RFPercentage(0.5),borderColor:'#86CD82', borderRadius:RFPercentage(100)}}>
                        <Image style={{width:'100%',height:'100%'}} source={require('../tabAssets/avatar.png')} />
                        <TouchableOpacity onPress={this.logout} style={{position:'absolute',bottom:RFPercentage(0),left:RFPercentage(16),width:'20%',justifyContent:'center',alignItems:'center',aspectRatio:1,backgroundColor:'#7966FF',borderWidth:RFPercentage(0.4),borderColor:'#FF6663',borderRadius:RFPercentage(100)}}>
                            <Text style={{color:'white',fontWeight:'bold',fontSize:RFPercentage(3),textAlign:'center'}}>+</Text>
                        </TouchableOpacity>
                </View>

                <View style={{width:'82.90%',aspectRatio:1.32, marginBottom:RFPercentage(8),justifyContent:'space-around'}}>
                    <TextInput placeholder="username" placeholderTextColor={'#7966FF'} style={{width:'100%',fontSize:RFPercentage(3),fontWeight:'bold',aspectRatio:6,backgroundColor:'white',borderRadius:RFPercentage(1),textAlign:'center',color:'#7966FF'}}/>
                    <TextInput placeholder="username" placeholderTextColor={'#7966FF'} style={{width:'100%',fontSize:RFPercentage(3),fontWeight:'bold',aspectRatio:6,backgroundColor:'white',borderRadius:RFPercentage(1),textAlign:'center',color:'#7966FF'}}/>
                    <View style={{width:'100%',backgroundColor:'#86CD82',aspectRatio:6,alignItems:'center',justifyContent:'center', borderRadius:RFPercentage(6)}} >
                        <Text style={{color:'white',fontWeight:'bold',fontSize:RFPercentage(4)}}>Udate</Text>
                    </View>
                </View>
            </LinearGradient>
        )
    }
}

export default Profile;