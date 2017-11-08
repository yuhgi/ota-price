import React from 'react';
import PropTypes from 'prop-types';
import {View,Text,TouchableOpacity} from 'react-native';
import HotCityStyle from './style';

class HotCity extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <View style={HotCityStyle.container}>
                {this.props.cities.map((city) => {
                    return (
                        <TouchableOpacity key={city.areaCode}>
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
    cities:PropTypes.arrayOf(PropTypes.shape({
        areaCode:PropTypes.string,
        name:PropTypes.string
    }))
};

export default HotCity;