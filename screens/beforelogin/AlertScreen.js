import React from "react";
import {View, Text,Modal,Image,TouchableOpacity, StyleSheet} from 'react-native';


import { RFPercentage } from "react-native-responsive-fontsize";

class AlertScreen extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            
        }
        
    }
     
     
    render(){
        return(
            <View style={{flex:'1',position:'absolute'}}>
                 <Modal animationType="fade"transparent={true} visible={this.props.IsVisible}>
                    <View style={{flex:1,backgroundColor:'rgba(0,0,0,0.65)',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                        <TouchableOpacity onPress={()=>this.props.changeState()} >
                        <View style={{flexDirection:'column',alignItems:'center',justifyContent:'space-around',borderRadius:RFPercentage(5),backgroundColor:'white',width:'84.7%',aspectRatio:0.69}}>
                            <View style={[this.props.AlertType == 'error'?style.errorArtCont:style.successArtCont]}>
                                <Image style={{width:'100%',height:'100%'}}source={this.props.AlertType=='error'?require('../assets/ErroArt.png'):require('../assets/successArt.png')}/>
                            </View>
                            <View style={{width:'73.36%',aspectRatio:2, flexDirection:'column',alignItems:'center',justifyContent:'space-around'}}>
                                <Text style={[this.props.AlertType == 'error'?style.errorTitle:style.successTitle]}>
                                    Sorry
                                </Text>
                                <Text style={[this.props.AlertType == 'error'?style.errorMessage:style.successMessage]}>
                                    {this.props.message}
                                </Text>
                            </View>

                        
                        </View>
                        </TouchableOpacity>
                        
                    </View>
                </Modal>   
            </View>
        )
    }
}

const style = StyleSheet.create({
    errorArtCont:{
        width:'73.36%',
        aspectRatio:1
    },
    successArtCont:{
        width:'82.45%',
        aspectRatio:1.31
        
    },
    errorTitle:{
        color:'#7966FF',
        fontWeight:'bold',
        fontSize:RFPercentage(5)
    },
    successTitle:{
        color:'#86CD82',
        fontWeight:'bold',
        fontSize:RFPercentage(5)
    },
    errorMessage:{
        textAlign:'center',
        color:'#FF6663',
        fontSize:RFPercentage(3)
    },
    successMessage:{
        textAlign:'center',
        color:'#0038A2',
        fontSize:RFPercentage(3)
    }

})
export default AlertScreen; 