import React from "react";
import {View,Text} from 'react-native';
import Body from "../SearchStack/Search/Body";
import {LinearGradient} from 'expo-linear-gradient';
import FavoriteHeader from "./FavoriteHeader";
import { StatusBar } from "expo-status-bar";

class Favorite extends React.Component{
    constructor(props){
        super(props);
        this.state={
            results:''
        }
      
    }

   
    
     componentDidMount(){
         /*
            For the moment when the screen finishes loading it calls the api 
            and passes the result to the body compoment.
            the boddy component is a scrallable view. Inside Body goes the Item.js 
            Component. The Item is clickable and diretcts the user to the Recipe screen.

        */ 
        
        this.props.loadFavorites()
        //console.log(this.props.results.length + 'favorites')
        
       
    }
    render(){
        return(
            <View style={{flex:1}}>
                <StatusBar style={'light'}/>
                <LinearGradient style={{flex:1,alignItems:'center'}} locations={[0,0.2]} colors={['#B684F7','#5C61E7']} >
                 <FavoriteHeader/>   
                <Body favoriteScreen={true} loadFavorites={this.props.loadFavorites} navigation={this.props.navigation} results={this.props.results}/>
                </LinearGradient>
            </View>
        )
    }
}

export default Favorite 