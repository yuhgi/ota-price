import React from 'react';
import {View} from 'react-native';
import SearchCriteria from './SearchCriteria';
import OtaGroupList from './OtaGroupList';

class SearchScreen extends React.Component{
    render(){
        return (
            <View>
                <SearchCriteria {...this.props} />
                <OtaGroupList {...this.props} />
            </View>    
        );
    }
}

export default SearchScreen;