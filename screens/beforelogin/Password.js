import React from "react";
import {View,Text,StyleSheet,TextInput,Image,TouchableOpacity, TouchableWithoutFeedback,KeyboardAvoidingView,Keyboard} from 'react-native';
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import {RFPercentage} from "react-native-responsive-fontsize"; 

class Password extends React.Component{
    constructor(props){
        super(props);
        this.state={
            password:''
        }
    }
    // this function gets called every time the TextInput changes  and updates the username state
    updatePassword(text){
        this.setState({password:text})
        console.log(this.props.params.username)
    }

    render(){
        return(
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView behavior="padding" style={{flex:1}}>
                <LinearGradient style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center'}} locations={[0.5,1]}colors={['#E3DDFA','#fff']}>
                    <StatusBar style="dark"/>
                    <View style={{ flexDirection:'column',alignItems:'center',justifyContent:'center', width:'100%',aspectRatio:0.94}} >
                          <View style={{width:'79%',aspectRatio:1.75 }}>
                            <Image style={{width:'100%',height:'100%'}} source={require('../assets/PasswordArt.png')}/>
                        </View>
                    </View >
                    <View style={{width:'100%',flexDirection:'column',justifyContent:'flex-start',alignItems:'center',aspectRatio:0.9}}>
                        <View style={{flexDirection:'column',alignItems:'center',justifyContent:'space-between',width:'92.14%',aspectRatio:1.23}}>
                            <View style={{width:'90%',flexDirection:'column',alignItems:'center',justifyContent:'center', aspectRatio:5.11}}>
                                <Text style={{fontWeight:'bold',fontSize:RFPercentage(4),color:'#7966FF'}}>
                                    Password
                                </Text>
                                <Text style={{color:'#7966FF',fontSize:RFPercentage(2)}}>
                                    Please, enter your password.
                                </Text>
                            </View>
                            <View style={{width:'100%',aspectRatio:2.04,flexDirection:'column',alignItems:'center',justifyContent:'space-around',backgroundColor:'white', borderRadius:RFPercentage(2)}}>
                                <TextInput secureTextEntry={true}  placeholder="Password" onChangeText={text=>this.setState({password:text})} placeholderTextColor={'#7966FF'} color='blue'style={{ textAlign:'center', color:'#7966FF',width:'90%',aspectRatio:5.71,borderColor:'#7966FF',borderWidth:RFPercentage(0.1),borderRadius:RFPercentage(2)}}/>
                                <TouchableOpacity onPress={()=>this.props.navigation.navigate('ConfirmPassword',{password:this.state.password,username:this.props.route.params.username})} style={{flexDirection:'column',justifyContent:'center',alignItems:'center',width:'90%',aspectRatio:5.71,backgroundColor:'#7966FF',borderWidth:RFPercentage(0.1),borderRadius:RFPercentage(2)}}>
                                    <View style={{width:'11.11%',aspectRatio:1}}>
                                        <Image style={{width:'100%',height:'100%'}} source={require('../assets/arrowIcon.png')}/>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </LinearGradient>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
        )
    }

}

export default Password