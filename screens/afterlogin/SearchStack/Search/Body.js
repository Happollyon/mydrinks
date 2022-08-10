import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, FlatList} from "react-native";

import { RFPercentage } from "react-native-responsive-fontsize";

// Component
import Item from "./Item";




class Body extends React.Component{

    constructor(props){
        super(props);
        this.state={ 

        }
    }


    render(){
        return(
            <View style={{width:'100%',aspectRatio:0.56,backgroundColor:'#F8F8F8',borderRadius:RFPercentage(4),bottom:0,position:'absolute'}}>
            <FlatList style={{borderRadius:RFPercentage(4)}}
            contentContainerStyle={{alignItems:'center',paddingBottom:100}}
            data={this.props.results}
            renderItem={({item})=>(<Item  navigation={this.props.navigation} data={item}/>)}
            keyExtractor={item => item.idDrink}
            />
            </View>
          )
       
    }
}

export default Body;