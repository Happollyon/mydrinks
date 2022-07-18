import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {View,Text,Image,TouchableOpacity} from 'react-native';

class Recipe extends React.Component{

    constructor(props){
        super(props);
        this.state={

        }
    }
    componentDidMount(){
        this.props.navigation.setOptions({ tabBarStyle:{display:'none'}})
    }
    render(){
        return(
        <View style={{flex:1}}>
            <LinearGradient style={{flex:1,alignItems:'center'}} locations={[0,0.3]} colors={['rgba(182,132,247,0.51)','#5C61E7']}>

            </LinearGradient>
        </View>)
    }
}

export default Recipe;