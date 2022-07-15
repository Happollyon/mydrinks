import React from "react";
import {View,Text} from 'react-native';
import Body from "../SearchStack/Body";

class Favorite extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <View style={{flex:1}}>
                <Body/>
            </View>
        )
    }
}

export default Favorite 