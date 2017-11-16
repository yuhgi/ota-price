import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';
import FontIconStyle from './style';

class FontIcon extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Text
                style={[FontIconStyle.icon,this.props.style]}
            >
                {this.props.font}
            </Text>
        );
    }
}

FontIcon.propTypes = {
    font:PropTypes.string.isRequired
};

export default FontIcon;