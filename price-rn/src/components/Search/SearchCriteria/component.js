import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import SearchCriteriaStyle from './style';

class SearchCriteria extends React.Component {
    _onDeparturePress() {
        this.props.onDeparturePress && this.props.onDeparturePress();
    }
    _OnDestinationPress() {
        this.props.onDestinationPress && this.props.onDestinationPress();
    }
    render() {
        let { departureCity, destinationCity } = this.props;
        return (
            <View style={SearchCriteriaStyle.container}>
                <View style={SearchCriteriaStyle.city}>
                    <TouchableOpacity
                        onPress={this._onDeparturePress.bind(this)}
                        style={SearchCriteriaStyle.departureCity}
                    >
                        <Text style={SearchCriteriaStyle.departureCityText}>
                            {departureCity.name}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this._OnDestinationPress.bind(this)}
                        style={SearchCriteriaStyle.destinationCity}
                    >
                        <Text style={SearchCriteriaStyle.destinationCityText}>
                            {destinationCity.name}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

SearchCriteria.propTypes = {
    onDeparturePress:PropTypes.func,
    onDestinationPress:PropTypes.func,
    departureCity: PropTypes.shape({
        areaCode: PropTypes.string,
        name: PropTypes.string
    }),
    destinationCity: PropTypes.shape({
        areaCode: PropTypes.string,
        name: PropTypes.string
    })
};

export default SearchCriteria;