import React from 'react';
import {View,Text,StyleSheet} from 'react-native'

class Splash extends React.Component{
    constructor(props)  {
        super(props);
        this.state = {
        }
    }
    render(){
        return(<View style={style.container}>
            <Text style={{color:'#fff'}}>Splash</Text>
        </View>)
    }

}
const style = StyleSheet.create({
 container:{
    backgroundColor:'#000',
    alignItems: 'center',
    justifyContent: 'center'
}
})
export default Splash