import React from "react";
import {View,Text} from 'react-native';
import Body from "../SearchStack/Body";
import {LinearGradient} from 'expo-linear-gradient';
import FavoriteHeader from "./FavoriteHeader";

class Favorite extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <View style={{flex:1}}>
                <LinearGradient style={{flex:1,alignItems:'center'}} locations={[0,0.2]} colors={['#B684F7','#5C61E7']} >
                 <FavoriteHeader/>   
                <Body/>
                </LinearGradient>
            </View>
        )
    }
}

export default Favorite 