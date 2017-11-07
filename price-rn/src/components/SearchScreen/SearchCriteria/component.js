import React from 'react';
import {Text,View,TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

class SearchCriteria extends React.Component{
    _onDeparturePress(){
        this.props.navigation.navigate('DepartureCityScreen');
    }
    render(){
        let {departureCity,departureDate,destinationCity} = this.props;
        return (
            <View>
                <View>
                    <TouchableOpacity onPress={this._onDeparturePress.bind(this)}>
                        <Text>{departureCity.name}</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity>
                        <Text>{departureDate.year}年{departureDate.month}月{departureDate.date}日</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity>
                        <Text>{destinationCity.name}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

SearchCriteria.propTypes = {
    departureCity:PropTypes.shape({
        areaCode:PropTypes.string,
        name:PropTypes.string
    }),
    departureDate:PropTypes.shape({
        year:PropTypes.number,
        month:PropTypes.number,
        date:PropTypes.number
    }),
    destinationCity:PropTypes.shape({
        areaCode:PropTypes.string,
        name:PropTypes.string
    }),
    onDepartureCitySelect:PropTypes.func,
    onDestinationCitySelect:PropTypes.func,
    onDepartureDateSelect:PropTypes.func
};

export default SearchCriteria;