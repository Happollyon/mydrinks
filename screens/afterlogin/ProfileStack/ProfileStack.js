import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "./Profile";
 
const Stack = createStackNavigator();

export default class ProfileStack extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <Stack.Navigator initialRouteName="Profile">
                <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}}/>
            </Stack.Navigator>
        )
    }
}