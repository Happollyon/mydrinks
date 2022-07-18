import React from "react";
import {View,Text} from 'react-native';
import Body from "../SearchStack/Search/Body";
import {LinearGradient} from 'expo-linear-gradient';
import FavoriteHeader from "./FavoriteHeader";

class Favorite extends React.Component{
    constructor(props){
        super(props);
        this.state={
            results:''
        }
       
    }

    /*
    For the moment when the screen finishes loading it calls the api 
    and passes the result to the body compoment.
    the boddy component is a scrallable view. Inside Body goes the Item.js 
    Component. The Item is clickable and diretcts the user to the Recipe screen.
     
    */
    async componentDidMount(){
        try{
            const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=caipirinha');
            const json= await response.json();
            this.setState({results:json})
            console.log(json)
            
      }catch(error){
            console.error(error)
        }
    }
    render(){
        return(
            <View style={{flex:1}}>
                <LinearGradient style={{flex:1,alignItems:'center'}} locations={[0,0.2]} colors={['#B684F7','#5C61E7']} >
                 <FavoriteHeader/>   
                <Body navigation={this.props.navigation} results={this.state.results.drinks}/>
                </LinearGradient>
            </View>
        )
    }
}

export default Favorite 