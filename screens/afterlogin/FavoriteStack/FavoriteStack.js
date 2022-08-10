import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Favorite from "./Favorite";
const Stack = createStackNavigator();

export default class FavoriteStack extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return(
        <Stack.Navigator initialRouteName="Favorite" screenOptions={{gestureEnabled:false}}>
            <Stack.Screen name="Favorite" component={Favorite} options={{headerShown:false,gestureEnabled:false}}/>
        </Stack.Navigator>
        )
    }
}