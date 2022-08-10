import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {View,Text,Image,TouchableOpacity} from 'react-native';


import { ScrollView } from "react-native-gesture-handler";
import { RFPercentage } from "react-native-responsive-fontsize";

class Recipe extends React.Component{

    constructor(props){
        super(props);
        this.state={
                 likeCliked:false
        }
        this.likeButton = this.likeButton.bind(this)
    }

    componentWillUnmount(){
        /**
         * this function is called when the user is about to return to the favorites scress
         * this function will call the backend to reload the liked drinks.
         * 
         * likedCliked is set in this class in the likeButton function
         * favoriteScreen is set in Favorite.js class. I makes sure the loadFavorite function wont be called 
         * if user is return from recipe screen to searchScreen. 
         * **/

        if(this.state.likeCliked && this.props.route.params.favoriteScreen){
        this.props.route.params.loadFavorites()
        }
    }

    componentDidMount(){

        /**When the screen is loaded, this call is sent to database to make user user has liked this drink 
         * and update the heart icon -> UI  
         * **/
        this.props.navigation.setOptions({ tabBarStyle:{display:'none'}})
       
            fetch('http://mydrinks123.herokuapp.com/liked/44'+'/'+this.props.route.params.data.idDrink).then(response =>{
                response.json().then(response=>{
                    if(response.alreadyLiked=="true"){
                        this.setState({liked:true})
                    }else{
                        this.setState({liked:false})
                    }
                    
                })
            })
        
    }
    likeButton(){

        /**
         * If the user cliks the button like (heart icon)
         * this function calls the backend
         * the called endpoint deppends on the liked state
         * if liked iquals TRUE, dislike end point is called
         * or like end point is called if like iquals true. 
         * **/
        let url = this.state.liked?'http://mydrinks123.herokuapp.com/dislike/44':'http://mydrinks123.herokuapp.com/likedrink/44'
        fetch(url+'/'+this.props.route.params.data.idDrink).then(response=>{
            response.json().then(response=>{
                
                this.setState({'liked':!this.state.liked, likeCliked:!this.state.likeCliked})
            })
        })
    }
  

    render(){
        return(
        <LinearGradient style={{width:'100%',height:'100%'}} locations={[0,0.3]} colors={['rgba(182,132,247,0.51)','#5960E6']}>
            <ScrollView style={{flex:1,botom:'0'}} contentContainerStyle={{alignItems:'center'}}>
           
                    
                <View style={{width:'91.36%',aspectRatio:9.76, flexDirection:'row',justifyContent:'space-between',marginTop:RFPercentage(8)}}>
                    <TouchableOpacity onPress={()=>this.props.route.params.navigation.goBack()} style={{width:'10.22%',aspectRatio:1.06}}>
                        <Image style={{width:'100%',height:'100%'}} source={require('../../tabAssets/backArrow.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.likeButton()} style={{width:'11.52%',aspectRatio:1.14}}>
                        <Image style={{width:'100%',height:'100%'}} source={this.state.liked?require('../../tabAssets/redheart.png'):require('../../tabAssets/whiteHeart.png')}/>
                    </TouchableOpacity>
                </View>

                <View style={{width:'91.36%',aspectRatio:3.55,marginTop:RFPercentage(8)}}>
                    <Text style={{fontSize:RFPercentage(5),fontWeight:'bold',color:'white'}}>
                       {this.props.route.params.data.strDrink}
                    </Text>
                    <View style={{width:'100%',aspectRatio:7.32,flexDirection:'row',flexWrap:'wrap'}}>
                        
                       {
                       this.props.route.params.ingredients.map((ingredient)=>(
                       <Text style={{color:'white',fontSize:RFPercentage(2)}}>
                         {ingredient + " "}
                        </Text>))
                        }
                    </View>
                </View> 

                <View style={{width:'91.36%', aspectRatio:3.21,flexDirection:'row',marginTop:RFPercentage(4),justifyContent:'space-between'}}>
                    <View style={{width:'53.13%',aspectRatio:1.72, justifyContent:'space-around'}}>
                        <View style={{width:'100%',aspectRatio:5.07,flexDirection:'row'}}>
                            <View style={{height:'100%',aspectRatio:1}}>
                                <Image style={{width:'100%',height:'100%'}} source={require('../../tabAssets/star.png')}/>
                            </View>
                            <View style={{height:'100%',aspectRatio:1}}>
                                <Image style={{width:'100%',height:'100%'}} source={require('../../tabAssets/star.png')}/>
                            </View>
                            <View style={{height:'100%',aspectRatio:1}}>
                                <Image style={{width:'100%',height:'100%'}} source={require('../../tabAssets/star.png')}/>
                            </View>
                        </View>
                        <Text style={{color:'white', fontSize:RFPercentage(2)}}>{this.props.route.params.ingredientCount} Reviews</Text>
                        <Text style={{color:'white', fontSize:RFPercentage(2)}}>{this.props.route.params.data.strCategory}</Text>
                    </View>
                    <View style={{height:'100%', aspectRatio:1.33}}>
                        <Image style={{width:'100%',height:'100%',borderRadius:RFPercentage(1)}} source={{uri:this.props.route.params.data.strDrinkThumb}}/>
                    </View>
                </View>

                <View style={{width:'91.36%' ,justifyContent:'space-around',marginTop:RFPercentage(8)}}>
                    <Text style={{color:'white',fontSize:RFPercentage(3),fontWeight:'bold'}}>Ingredients</Text>
                    {
                        this.props.route.params.ingredients.map((ingredient,index)=>(
                            <Text style={{color:'white',marginTop:RFPercentage(1)}}>{
                                this.props.route.params.measures[index]+" "+ingredient}</Text>
                        ))
                    
                    }
                </View>
                <View style={{width:'91.36%' ,justifyContent:'space-around',marginTop:RFPercentage(3)}}>
                    <Text style={{color:'white',fontSize:RFPercentage(3),fontWeight:'bold'}}>Instructions</Text>
                    <Text style={{color:'white',marginTop:RFPercentage(1)}}>
                       {this.props.route.params.data.strInstructions}
                    </Text>
                </View>
                    
            
            </ScrollView>
        </LinearGradient>)
    }
}

export default Recipe;