import React from "react";
import { RFPercentage } from "react-native-responsive-fontsize";
import { View,Text,Image } from "react-native";
import { StatusBar } from "expo-status-bar";

 
class FavoriteHeader extends React.Component{
    constructor(props)
    {
        super(props);
        
    }

    render(){
        return(
        <View style={{top:RFPercentage(9),flexDirection:'row',width:'72,64%',justifyContent:'center',alignItems:'center',aspectRatio:4.27}}>
              
            <Text style={{color:'#fff',fontSize:RFPercentage(3),fontWeight:'bold',marginRight:RFPercentage(1)}}>Favorite</Text>
            <View style={{width:'13.64%',aspectRatio:1}}>
                <Image style={{width:'100%',height:'100%'}}source={require('../tabAssets/FavLogo.png')}/>
            </View>
        </View>)
    }
}

export default FavoriteHeader;