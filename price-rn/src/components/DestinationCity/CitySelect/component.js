import React from 'react';
import PropTypes from 'prop-types';

import AreaSelect from '../../../common/AreaSelect';
import areaData from './area';

class CitySelect extends React.Component{
    _onSelect(areaCode,name){
        this.props.onSelect && this.props.onSelect(areaCode,name);
        this.props.navigation.navigate('OtaGroupListScreen');
    }
    render(){
        return (
            <AreaSelect 
                areaData={areaData} 
                onSelect={this._onSelect.bind(this)} 
                currentAreaCode={this.props.currentAreaCode} 
            />
        );
    }   
}

CitySelect.propTypes = {
    onSelect:PropTypes.func,
    currentAreaCode:PropTypes.string,
    areaData:PropTypes.object
};

export default CitySelect;