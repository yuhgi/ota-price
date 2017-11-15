import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import SearchCriteria from './SearchCriteria';
import HotCity from './HotCity';
import SearchScreenStyle from './style';

class SearchScreen extends React.Component{
    render(){
        return (
            <View style={SearchScreenStyle.container}>
                <SearchCriteria {...this.props} />
                <HotCity {...this.props} />
            </View>    
        );
    }
}


export default SearchScreen;