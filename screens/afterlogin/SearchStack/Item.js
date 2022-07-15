import React from "react";
import { View, Text, TouchableOpacity} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

class Item extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    render(){
        return(
              <View style={{width:'89%',marginVertical:RFPercentage(1),aspectRatio:2.23,backgroundColor:'#FFF'}}>
                <TouchableOpacity onPress={()=>console.log(this.props.color)}><Text>{this.props.title}</Text></TouchableOpacity>
              </View>  
        )
    }
    
}
export default Item;