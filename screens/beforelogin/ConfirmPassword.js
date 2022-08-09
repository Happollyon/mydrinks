import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {View,Text,StyleSheet,TextInput,Image,TouchableOpacity, TouchableWithoutFeedback,KeyboardAvoidingView,Keyboard} from 'react-native';
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import {RFPercentage} from "react-native-responsive-fontsize";
import AlertScreen from "./AlertScreen"; 

class ConfirmPassword extends React.Component{
    constructor(props){
        super(props);
        this.state={
            password:'',
            title:'',
            message:'',
            AlertType:'',
            IsVisible:false
        }
        this.checkIfPasswordMatch = this.checkIfPasswordMatch.bind(this);
        this.changeState = this.changeState.bind(this)
    }
    // this function gets called every time the TextInput changes  and updates the username state
    updatePassword(text){
        this.setState({password:text})

    }


     checkIfPasswordMatch(){
        if(this.state.password==this.props.route.params.password){
            fetch('https://mydrinks123.herokuapp.com/register/'+this.props.route.params.username+'/'+this.state.password).then(response=>{
                response.json().then(async (response)=>{
                    // affter registered user is sent to main screen 
                    // and local storage is updated for logged
                    try {
                        let id = response.userData[0].id.toString()
                        await AsyncStorage.setItem('logged','true')
                        await AsyncStorage.setItem('user_id',id)
                        await AsyncStorage.setItem('username', response.userData[0].username)
                    }
                    catch(e){
                        console.log("error in ConfirmPassword!")
                    }

                    this.props.navigation.navigate('SearchStack')
                })

            })
            this.setState({
                title:'Yeeyy!',
                message:'You are all set. Enjoy!',
                AlertType:'Success',
                IsVisible:true
            })
        }else{
            console.log(this.props.route.params.password)
            this.setState({
                title:'Sorry',
                message:'The password dont match.',
                AlertType:'error',
                IsVisible:true
        })

    }
}

 /*
    this function should be added to all screens that use AlertScreen.js component.
    This function sets whether the alert shoud be visible or not. 
    The fuction should be passed to the AlertScreen.js as a prop. 
    IsVisible state should be added to the parent to AlertScreen js.    
*/
changeState() {
    let toggle = !this.state.IsVisible;
    this.setState({IsVisible:toggle})
    
}

render(){
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView behavior="padding" style={{flex:1}}>
                <AlertScreen AlertType={this.state.AlertType} title={this.state.title} message={this.state.message} IsVisible={this.state.IsVisible} changeState={this.changeState}/>
            
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
                                    Confirm
                                </Text>
                                <Text style={{color:'#7966FF',fontSize:RFPercentage(2)}}>
                                    Please, confirm your password.
                                </Text>
                            </View>
                            <View style={{width:'100%',aspectRatio:2.04,flexDirection:'column',alignItems:'center',justifyContent:'space-around',backgroundColor:'white', borderRadius:RFPercentage(2)}}>
                                <TextInput secureTextEntry={true}  placeholder="Password" onChangeText={text=>this.updatePassword(text)} placeholderTextColor={'#7966FF'} color='blue'style={{ textAlign:'center', color:'#7966FF',width:'90%',aspectRatio:5.71,borderColor:'#7966FF',borderWidth:RFPercentage(0.1),borderRadius:RFPercentage(2)}}/>
                                <TouchableOpacity  onPress={()=>this.checkIfPasswordMatch()} style={{flexDirection:'column',justifyContent:'center',alignItems:'center',width:'90%',aspectRatio:5.71,backgroundColor:'#7966FF',borderWidth:RFPercentage(0.1),borderRadius:RFPercentage(2)}}>
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

export default ConfirmPassword