import React from 'react';
import {View} from 'react-native';
import CitySelect from './CitySelect';
import DepartureStyle from './style';

export default class DepartureCityScreen extends React.Component{
    render(){
        return (
            <View style={DepartureStyle.container}>
                <CitySelect navigation={this.props.navigation} />
            </View>
        );
    }
}