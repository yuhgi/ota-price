import React from 'react';
import {View} from 'react-native';
import CitySelect from './CitySelect';

export default class DestinationCityScreen extends React.Component{
    render(){
        return (
            <View>
                <CitySelect />
            </View>
        );
    }
}