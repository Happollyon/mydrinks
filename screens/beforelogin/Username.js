import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {View,Image,Text,TextInput,TouchableWithoutFeedback,Keyboard,KeyboardAvoidingView, Alert} from 'react-native';
import {StatusBar} from 'expo-status-bar'
import { RFPercentage } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native-gesture-handler";
import AlertScreen from "./AlertScreen";

class Username extends React.Component{
    constructor(props){
            super(props);
            this.state={
                    IsVisible:false,
                    username:''
            }
            this.CheckUsername = this.CheckUsername.bind(this)
            this.updataUsername = this.updataUsername.bind(this)
            this.changeState = this.changeState.bind(this);
        }
    
    // this function gets called every time the TextInput changes  and updates the username state
    updataUsername(text){
            this.setState({username:text})
    }

    // this function is called when the user tries to submit username. It checks if username is allowed. 
    
    CheckUsername() {
        //if not allowed IsVisible state is set to true and an alert is shown. 
        //Alert in this context is AlertScreen.js
        if(this.state.username=='student'){
            this.setState({IsVisible:true})
            console.log('here')
            console.log(this.state.IsVisible)
        }else{
            // if user name is alled user is sent to password screen. 
            console.log(this.state.username)
            
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
       console.log('fagner')
   }
    render(){
        return(
           <TouchableWithoutFeedback  onPress={Keyboard.dismiss}>
            
            <KeyboardAvoidingView behavior="padding" style={{flex:1}}>
            <AlertScreen AlertType={'sucess'} title={'Sorry'} message={'The username is not available.'} IsVisible={this.state.IsVisible} changeState={this.changeState}/>
                <LinearGradient style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center'}} locations={[0.5,1]}colors={['#E3DDFA','#fff']}>
                    <StatusBar style="dark"/>
                    <View style={{ flexDirection:'column',alignItems:'center',justifyContent:'center', width:'100%',aspectRatio:0.94}} >
                        <View style={{width:'85.05%',aspectRatio:1.51 }}>
                            <Image style={{width:'100%',height:'100%'}} source={require('../assets/UsernameArt.png')}/>
                        </View>
                    </View >
                    <View style={{width:'100%',flexDirection:'column',justifyContent:'flex-start',alignItems:'center',aspectRatio:0.9}}>
                        <View style={{flexDirection:'column',alignItems:'center',justifyContent:'space-between',width:'92.14%',aspectRatio:1.23}}>
                            <View style={{width:'90%',flexDirection:'column',alignItems:'center',justifyContent:'center', aspectRatio:5.11}}>
                                <Text style={{fontWeight:'bold',fontSize:RFPercentage(4),color:'#7966FF'}}>
                                    Username
                                </Text>
                                <Text style={{color:'#7966FF',fontSize:RFPercentage(2)}}>
                                    Please, enter your username.
                                </Text>
                            </View>
                            <View style={{width:'100%',aspectRatio:2.04,flexDirection:'column',alignItems:'center',justifyContent:'space-around',backgroundColor:'white', borderRadius:RFPercentage(2)}}>
                                <TextInput placeholder="Username" onChangeText={text=>this.updataUsername(text)} placeholderTextColor={'#7966FF'} color='blue'style={{ textAlign:'center', color:'#7966FF',width:'90%',aspectRatio:5.71,borderColor:'#7966FF',borderWidth:RFPercentage(0.1),borderRadius:RFPercentage(2)}}/>
                                <TouchableOpacity onPress={()=>this.CheckUsername()} style={{flexDirection:'column',justifyContent:'center',alignItems:'center',width:'90%',aspectRatio:5.71,backgroundColor:'#7966FF',borderWidth:RFPercentage(0.1),borderRadius:RFPercentage(2)}}>
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

export default Username