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
       this.loadFavorites =  this.loadFavorites.bind(this)
    }

   
    /**
     * this function is called in componentDidmount to load liked drinks the first time. 
     * then this function is passed the following components:
     * Body -> Item-> Recipe: When the recipe screen is about to unmount, this function is called 
     * but its only called if the user has liked or disked a drink. 
     * this way, when user return to this screen, it will have been updated to reflect the actions take in 
     * the receipe screen. 
     * **/
    loadFavorites(){
           
            /**
             * When function was being called in Recipe screen and the drink had been disliked 
             * the drink would still remain in the ui, because the results state still had it. 
             * now the state is set to null before its populated.
             * 
             * **/
            this.setState({results:''})
            

            const response = fetch('https://mydrinks123.herokuapp.com/selectliked/44').then(response =>{
                response.json().then(response =>{
                    
                    response.liked_drinks.map(item => {
                        return fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='+item.drink_id).then(response=>{ 
                        
                            response.json().then(response =>{
                               
                                this.setState({ results: [...this.state.results, response.drinks[0]] })
                               
                                
                            })
                        })
                    })
                    
                })
            })
           

     
    }
     componentDidMount(){
         /*
            For the moment when the screen finishes loading it calls the api 
            and passes the result to the body compoment.
            the boddy component is a scrallable view. Inside Body goes the Item.js 
            Component. The Item is clickable and diretcts the user to the Recipe screen.

        */ 
        
        this.loadFavorites()
       
    }
    render(){
        return(
            <View style={{flex:1}}>
                <LinearGradient style={{flex:1,alignItems:'center'}} locations={[0,0.2]} colors={['#B684F7','#5C61E7']} >
                 <FavoriteHeader/>   
                <Body favoriteScreen={true} loadFavorites={this.loadFavorites} navigation={this.props.navigation} results={this.state.results}/>
                </LinearGradient>
            </View>
        )
    }
}

export default Favorite 