import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Search from "./Search";

const Stack = createStackNavigator();

export default class SearchStack extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return(
            <Stack.Navigator initialRouteName="Search">
                <Stack.Screen name="Search" component={Search} options={{headerShown:false}}/>
            </Stack.Navigator>
        )
    }

}
