import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { RFPercentage } from "react-native-responsive-fontsize";
import AlertScreen from "./AlertScreen";
import {View,Image,Text,TextInput,Keyboard,KeyboardAvoidingView,TouchableWithoutFeedback,TouchableOpacity} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            IsVisible:false,
            username:'',
            password:''
        }
        this.changeState = this.changeState.bind(this)
        this.CheckCredentials = this.CheckCredentials.bind(this)
    }

    /*  
        called when user presses LOGIN button
        This function checks the credentials and if they dont match 
        the IsVisible is set to true and the appropriate message is 
        shown to the user. 
    */
    CheckCredentials() {

            // calls api and verifies users credentials
          fetch('https://mydrinks123.herokuapp.com/loggin/'+this.state.username+'/'+this.state.password).then(response=>{
            response.json().then(async (response)=>{
                if(response.logged == 'true')
                {   // if credentials are validated, user sent to the search stack "inside the app"
                    try{
                        
                        let id = response.userData[0].id.toString()
                        await AsyncStorage.setItem('logged','true')
                        await AsyncStorage.setItem('user_id',id)
                        await AsyncStorage.setItem('username', response.userData[0].username)

                      }catch(e){

                        console.log('error loggin screen catch: '+ e)
                      }
                   
                    this.props.navigation.navigate('SearchStack')
                }else{

                    // if credentials are not validated, user is shown an error message. 
                    this.setState({
                        IsVisible:true,
                        AlertType:'error',
                        title:'Sorry',
                        message:'The username and password dont match.'
                    })
                }

            })
        })
            
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

                    <View style={{width:'100%',aspectRatio:1.17,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                        <View style={{width:'63.67%',aspectRatio:0.99}}>
                                <Image source={require('../assets/loginArt.png')} style={{width:'100%',height:'100%'}}/>
                        </View>
                    </View>
                    <View style={{width:'100%',aspectRatio:0.76,flexDirection:'column',alignItems:'center',justifyContent:'space-around'}}>
                        <View style={{width:'76.41%',aspectRatio:4.58,flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                            <Text style={{color:'#7966FF',fontSize:RFPercentage(5),fontWeight:'bold'}}>Login</Text>
                            <Text style={{color:'#5960E6'}}>Plese, enter username and password.</Text>
                        </View>
                        <View style={{width:'100%',aspectRatio:1.01,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                            <View style={{flexDirection:'column',justifyContent:'space-around',alignItems:'center',width:'93.4%',aspectRatio:1.13,backgroundColor:'#fff',borderRadius:RFPercentage(2)}}>
                                <TextInput placeholder="Username" onChangeText={text=>this.setState({username:text})} placeholderTextColor={'#7966FF'} color='blue'style={{ textAlign:'center', color:'#7966FF',width:'90%',aspectRatio:5.71,borderColor:'#7966FF',borderWidth:RFPercentage(0.1),borderRadius:RFPercentage(2)}}/>
                                <TextInput secureTextEntry={true}  placeholder="Password"  onChangeText={text=>this.setState({password:text})} placeholderTextColor={'#7966FF'} color='blue'style={{ textAlign:'center', color:'#7966FF',width:'90%',aspectRatio:5.71,borderColor:'#7966FF',borderWidth:RFPercentage(0.1),borderRadius:RFPercentage(2)}}/>
                                <TouchableOpacity onPress={()=>this.CheckCredentials()} style={{flexDirection:'column',justifyContent:'center',alignItems:'center',width:'90%',aspectRatio:5.71,backgroundColor:'#7966FF',borderRadius:RFPercentage(4)}}>
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

export default Login;