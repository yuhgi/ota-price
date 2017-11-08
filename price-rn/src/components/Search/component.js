import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import SearchCriteria from './SearchCriteria';
import HotCity from './HotCity';
import DepartureCitySelect from './DepartureCitySelect';
import DestinationCitySelect from './DestinationCitySelect';
import SearchScreenStyle from './style';

class SearchScreen extends React.Component{
    render(){
        return (
            <View style={SearchScreenStyle.container}>
                <SearchCriteria {...this.props} />
                <HotCity {...this.props} />
                {
                    this.props.departureCitySelectShow?<DepartureCitySelect {...this.props} />:null
                }
                {
                    this.props.destinationCitySelectShow?<DestinationCitySelect {...this.props} />:null
                }
            </View>    
        );
    }
}

SearchScreen.propTypes = {
    departureCitySelectShow:PropTypes.bool,
    destinationCitySelectShow:PropTypes.bool
};

export default SearchScreen;