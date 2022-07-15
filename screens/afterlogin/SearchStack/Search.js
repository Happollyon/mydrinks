import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View,Keyboard,TouchableWithoutFeedback} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

//Components
import SearchHeader from './SearchHeader';
import Body from './Body';

class Search extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return(
            
            <View style={{flex:1}}>
                <LinearGradient style={{flex:1,alignItems:'center'}} locations={[0,0.2]} colors={['#B684F7','#5C61E7']} >
                    <SearchHeader/>
                    <Body/>
                </LinearGradient>
            </View>
          
        )
    }
}

export default Search;