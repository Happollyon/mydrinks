import React from "react";
import {View,Image} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { RFPercentage } from "react-native-responsive-fontsize";
// Screes 
import SearchStack from "./SearchStack/SearchStack";
import FavoriteStack from "./FavoriteStack/FavoriteStack";
import ProfileStack from "./ProfileStack/ProfileStack";
import Search from "./SearchStack/Search/Search";

const Tab =  createBottomTabNavigator();

class Home extends React.Component{

    constructor(props){

        super(props);
        this.state = {

        }
       
    }
    componentDidMount(){
        console.log(this.props.results.length + 'Home')
      }
    render(){
        return(
            <Tab.Navigator initialRouteName="Search"   screenOptions={{tabBarShowLabel:false,
                tabBarStyle:{  
                backgroundColor:'#7966FF',width:'100%',height:'12%',
                borderTopLeftRadius:RFPercentage(4),borderTopRightRadius:RFPercentage(4),
                position:'absolute'
            }}}>
                <Tab.Screen 
                name="Search" 
                component={Search}  initialParams={{results:this.props.results,loadFavorites:this.props.loadFavorites}}
                options={{ headerShown:false,gestureEnabled:false,
                tabBarIcon:({focused})=>(
                    <View style={{alignItems:'center',justifyContent:'center'}}>
                        <Image resizeMode='contain'source={focused?require('./tabAssets/searchFocus.png'):require('./tabAssets/search.png')}
                        style={{width:RFPercentage(6)}}
                        />                        
                    </View>
                )
                }}/>
                <Tab.Screen 
                name="FavoriteStack" 
                
                children={()=><FavoriteStack  navigation={this.props.navigation} results={this.props.results} loadFavorites={this.props.loadFavorites}/>}
                options={{
                    headerShown:false,
                    tabBarIconStyle:{},
                    tabBarIcon:({focused})=>(
                        <View style={{alignItems:'center',justifyContent:'center',bottom:RFPercentage(3)}}>
                            <Image resizeMode='contain'source={focused?require('./tabAssets/FavoriteFocus.png'):require('./tabAssets/favorite.png')}
                            style={{width:RFPercentage(10)}}
                            />                        
                        </View>
                    )
                    }}/>

                <Tab.Screen 
                name="ProfielStack" 
                component={ProfileStack}
                options={{ 
                    headerShown:false,
                    
                    tabBarIcon:({focused})=>(
                        <View style={{alignItems:'center',justifyContent:'center'}}>
                            <Image resizeMode='contain'source={focused?require('./tabAssets/profileFocused.png'):require('./tabAssets/profile.png')}
                            style={{width:RFPercentage(6)}}
                            />                        
                        </View>
                    )}} />
            </Tab.Navigator>
        )
    }
}

export default Home