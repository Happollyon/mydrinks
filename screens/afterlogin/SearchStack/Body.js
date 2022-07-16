import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, FlatList} from "react-native";

import { RFPercentage } from "react-native-responsive-fontsize";

// Component
import Item from "./Item";

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      color:'green'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      color:'blue'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      color:'white'

    },{
        id: '58694a0f-3da1-471f-bd9d6-145571er29d72',
        title: 'Third Item',
        color:'white'
  
      },{
        id: '58694a0f-3da1-471f-bd96-1455w71e29d72',
        title: 'Third Item',
        color:'white'
  
      },{
        id: '58694a0f-3da1-471f-bd96-145571e29qd72',
        title: 'Third Item',
        color:'white'
  
      },{
        id: '58694a0f-3da1-471f-bd96-145g571e29d72',
        title: 'Third Item',
        color:'white'
  
      },{
        id: '58694a0f-3dah1-471f-bd96-145571e29d72',
        title: 'Third Item',
        color:'white'
  
      },
  ];

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
            data={DATA}
            renderItem={({item})=>(<Item color={item.color} title={item.title}/>)}
            keyExtractor={item => item.id}
            />
            </View>
          )
       
    }
}

export default Body;