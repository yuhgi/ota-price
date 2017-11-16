import React from 'react';
import PropTypes from 'prop-types';
import {View,Text,TouchableOpacity} from 'react-native';
import HotCityStyle from './style';

class HotCity extends React.Component{
    constructor(props){
        super(props);
    }
    _onCityPress(areaCode,name){
        this.props.onCityPress && this.props.onCityPress(areaCode,name);
    }
    render(){
        return (
            <View style={HotCityStyle.container}>
                {this.props.cities.map((city) => {
                    return (
                        <TouchableOpacity 
                            key={city.areaCode} 
                            onPress={this._onCityPress.bind(this,city.areaCode,city.name)}
                        >
                            <View style={HotCityStyle.city}>
                                <Text>{city.name}</Text>
                            </View>
                        </TouchableOpacity>   
                    );
                })}
            </View>
        );
    }
}

HotCity.propTypes = {
    onCityPress:PropTypes.func,
    cities:PropTypes.arrayOf(PropTypes.shape({
        areaCode:PropTypes.string,
        name:PropTypes.string
    }))
};

export default HotCity;