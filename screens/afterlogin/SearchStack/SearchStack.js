import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import Recipe from "./Recipe/Recipe";
import Search from "./Search/Search";
import Home from "../Home";

const Stack = createStackNavigator();

export default class SearchStack extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }
   
    render(){
        return(
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" children={()=><Home results = {this.props.results} navigation={this.props.navigation} loadFavorites={this.props.loadFavorites}/>}   options={{headerShown:false}} />
                <Stack.Screen name='Recipe' navigation={this.props.navigation} component={Recipe} options ={{tabBarVisable:false,headerShown:false}} />
            </Stack.Navigator>
        )
    }

}
