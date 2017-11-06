import React from 'react';
import {Text,View,TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

class Search extends React.Component{
    render(){
        let {departureCity,departureDate,destinationCity} = this.props;
        return (
            <View>
                <View>
                    <TouchableOpacity>
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

Search.propTypes = {
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
    })
};

export default Search;