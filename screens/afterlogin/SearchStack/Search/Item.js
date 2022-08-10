import React from "react";
import { View, Text,Image, TouchableOpacity} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import {useNavigation} from '@react-navigation/native'


class Item extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            ingredientCount:0,
            ingredients:[],
            measures: []
        }
       
    }

    // run when componented is rendered
    componentDidMount(){
        // the variables bellow are used to update 
        // state once loop ends
        let count = 0; // number of ingredientes
        let IngredientArr = []; // stores ingredients individualy 
        let measureArr = []; // stores measures individually 

        // 15 is the max numb of ingredients and measures. 
        for(let i = 0; i<15;i++){

            // keys follow format => strIngredient1 .. and strMeasure1 ..
            let stringkEY = 'strIngredient'+i;
            let measureKey = "strMeasure"+i;

            if(this.props.data[stringkEY]!=null)
            {
                
                count = count +1;
                IngredientArr.push(this.props.data[stringkEY])

            }if(this.props.data[measureKey]!=null){

                measureArr.push(this.props.data[measureKey])
            }

        }

        // updates the states
        this.setState({
            ingredientCount:count,
            ingredients:IngredientArr,
            measures:measureArr})
        
    }

   
    render(){
        return(
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('Recipe',{favoriteScreen:this.props.favoriteScreen,loadFavorites:this.props.loadFavorites,data:this.props.data,ingredientCount:this.state.ingredientCount,
                ingredients:this.state.ingredients,measures:this.state.measures,navigation:this.props.navigation})} 
              style={{width:'89%',borderRadius:RFPercentage(3),marginVertical:RFPercentage(1.5),
              aspectRatio:2.23,backgroundColor:'#FFF',flexDirection:'row'}}>
                
               <View style={{height:'100%',width:'50%',alignItems:'center',justifyContent:'center'}}>
                        <View style={{width:'96%',aspectRatio:1.38,borderRadius:RFPercentage(1)}}>
                            <Image style={{width:'100%',height:'100%',borderRadius:RFPercentage(1)}} source={{uri:this.props.data.strDrinkThumb}}/>
                        </View>
               </View>
               <View style={{height:'100%',width:'50%'}}>
                    <View style={{width:'100%',aspectRatio:2.91, justifyContent:'center'}}>
                        <Text style={{fontSize:RFPercentage(3), color:'#5960E6',fontWeight:'bold',marginLeft:RFPercentage(2)}}>{this.props.data.strDrink}</Text>
                    </View>
                    <View style={{width:'100%',aspectRatio:1.74}}>
                        <Text style={{marginLeft:RFPercentage(2),color:'#5960E6'}}>{this.state.ingredientCount} Ingredients</Text>
                        <Text style={{marginLeft:RFPercentage(2),color:'#5960E6'}}>4 reviews</Text>
                        <View style={{marginLeft:RFPercentage(2),width:'46.47%',aspectRatio:4.93,flexDirection:'row'}}>
                            
                            <View style={{height:'100%',aspectRatio:1}}><Image style={{height:'100%',aspectRatio:1}} source={require('../../tabAssets/star.png')}/></View>
                            <View style={{height:'100%',aspectRatio:1}}><Image style={{height:'100%',aspectRatio:1}} source={require('../../tabAssets/star.png')}/></View>
                            <View style={{height:'100%',aspectRatio:1}}><Image style={{height:'100%',aspectRatio:1}} source={require('../../tabAssets/star.png')}/></View>
                            
                        </View>
                    </View>
               </View>
              </TouchableOpacity>  
        )
    }
    
}
export default Item;