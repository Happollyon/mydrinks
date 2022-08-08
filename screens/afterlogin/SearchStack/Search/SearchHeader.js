import React from 'react';
import {View,Text,TextInput} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { RFPercentage } from 'react-native-responsive-fontsize';

class SearchHeader extends React.Component{

    constructor(props){
        super(props);
        this.state={
            input:""
        }
    }
    render(){
        return(
                <View style={{}}>
                    
                        <TextInput onChangeText={(text)=>this.setState({input:text})} onSubmitEditing={()=>this.props.callApiAsync(this.state.input)} placeholder="Search" style={{ top:RFPercentage(8),width:'84.78%',textAlign:'center',fontSize:RFPercentage(3), aspectRatio:5.11,backgroundColor:'#fff',borderRadius:RFPercentage(7)}}placeholderTextColor={'#7966FF'}/>

                </View>
        )
    }
}

export default SearchHeader;