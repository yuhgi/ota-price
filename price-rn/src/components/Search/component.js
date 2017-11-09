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
                {
                    this.props.departureCitySelectShow?<DepartureCitySelect />:null
                }
                <SearchCriteria {...this.props} />
                <HotCity {...this.props} />
                
                {
                    this.props.destinationCitySelectShow?<DestinationCitySelect />:null
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