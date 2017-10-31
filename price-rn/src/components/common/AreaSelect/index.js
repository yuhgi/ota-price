import React from 'react';
import PropTypes from 'prop-types';
import {View,Text,ScrollView} from 'react-native';
import AreaSelectStyle from './style';

const TYPES = [
    '当前','热门',
    'A','B','C','D','E','F','G',
    'H','J','K','L','M','N',
    'P','Q','R','S','T','W','X','Y','Z'
];

class AreaSelect extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <View style={AreaSelectStyle.container}>
                <View>
                    
                </View>
            </View>
        );
    }
}

AreaSelect.propTypes = {
    onSelect:PropTypes.func,
    areaCode:PropTypes.string
};

export default AreaSelect;