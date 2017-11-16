import React from 'react';
import {View,Text} from 'react-native';
import PropTypes from 'prop-types';
import SearchCriteria from './SearchCriteria';
import HotCity from './HotCity';
import SearchScreenStyle from './style';

class SearchScreen extends React.Component{
    static navigationOptions = ({navigation}) => {
        const header = (
            <View style={SearchScreenStyle.header}>
                <Text style={SearchScreenStyle.headerTitle}>全网最低价</Text>
            </View>
        );
        return {
            header:header
        };
    };
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