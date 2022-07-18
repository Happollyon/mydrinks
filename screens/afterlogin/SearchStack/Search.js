import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View,Keyboard,TouchableWithoutFeedback, TouchableOpacityBase} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

//Components
import SearchHeader from './SearchHeader';
import Body from './Body';

class Search extends React.Component{
    constructor(props){
        super(props);
        this.state={
            results:''
        }
        this.callApiAsync = this.callApiAsync.bind(this)
    }

    async callApiAsync(input){   
       try{
            const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+input);
            const json= await response.json();
            this.setState({results:json})
            
      }catch(error){
            console.error(error)
        }
    }

   

    render(){
        return(
            
            <View style={{flex:1}}>
                <LinearGradient style={{flex:1,alignItems:'center'}} locations={[0,0.2]} colors={['#B684F7','#5C61E7']} >
                    <SearchHeader callApi={this.callApiAsync}/>
                    <Body  results={this.state.results.drinks}/>
                </LinearGradient>
            </View>
          
        )
    }
}

export default Search;