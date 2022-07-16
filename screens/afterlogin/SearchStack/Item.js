import React from "react";
import { View, Text,Image, TouchableOpacity} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

class Item extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    render(){
        return(
              <View style={{width:'89%',borderRadius:RFPercentage(3),marginVertical:RFPercentage(1.5),
              aspectRatio:2.23,backgroundColor:'#FFF',flexDirection:'row'}}>
                
               <View style={{height:'100%',width:'50%',alignItems:'center',justifyContent:'center'}}>
                        <View style={{width:'96%',aspectRatio:1.38}}>
                            <Image style={{width:'100%',height:'100%'}} source={require('../tabAssets/drinkImage.png')}/>
                        </View>
               </View>
               <View style={{height:'100%',width:'50%'}}>
                    <View style={{width:'100%',aspectRatio:2.91, justifyContent:'center'}}>
                        <Text style={{fontSize:RFPercentage(3), color:'#5960E6',fontWeight:'bold',marginLeft:RFPercentage(2)}}>Margarita</Text>
                    </View>
                    <View style={{width:'100%',aspectRatio:1.74}}>
                        <Text style={{marginLeft:RFPercentage(2),color:'#5960E6'}}>3 Ingredients</Text>
                        <Text style={{marginLeft:RFPercentage(2),color:'#5960E6'}}>4 reviews</Text>
                        <View style={{marginLeft:RFPercentage(2),width:'46.47%',aspectRatio:4.93,flexDirection:'row'}}>
                            
                            <View style={{height:'100%',aspectRatio:1}}><Image style={{height:'100%',aspectRatio:1}} source={require('../tabAssets/star.png')}/></View>
                            <View style={{height:'100%',aspectRatio:1}}><Image style={{height:'100%',aspectRatio:1}} source={require('../tabAssets/star.png')}/></View>
                            <View style={{height:'100%',aspectRatio:1}}><Image style={{height:'100%',aspectRatio:1}} source={require('../tabAssets/star.png')}/></View>
                            
                        </View>
                    </View>
               </View>
              </View>  
        )
    }
    
}
export default Item;