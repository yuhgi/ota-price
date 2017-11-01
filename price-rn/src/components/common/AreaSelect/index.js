import React from 'react';
import PropTypes from 'prop-types';
import {View,Text,ScrollView,TouchableOpacity,Button} from 'react-native';
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
    _onTypePress(type){
        console.log(type);
    }
    _onCityPress(areaCode,name){
        this.onSelect && this.onSelect(areaCode,name);
    }
    _renderTypes(){
        return (
            <View style={AreaSelectStyle.areaType}>
                {TYPES.map((type,index) => {
                    return (
                        <TouchableOpacity key={index} onPress={this._onTypePress.bind(this,type)}>
                            <Text style={AreaSelectStyle.areaTypeItem}>{type}</Text>
                        </TouchableOpacity> 
                    );
                })}
            </View>
        );
    }
    _renderHot(cities){
        return (
            <View style={AreaSelectStyle.hot}>
                <Text style={AreaSelectStyle.cityHeader}>热门</Text>
                <View style={AreaSelectStyle.hotCities}>
                    {cities.map((city,index) => {
                        return (
                            <TouchableOpacity key={index} onPress={this._onCityPress(city.areaCode,city.name)}>
                                <View style={AreaSelectStyle.hotCity}>
                                    <Text>{city.name}</Text>
                                </View>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </View>
        );
    }
    _renderArea(){
        let areaData = this.props.areaData;
        let types = Object.keys(areaData);
        
        return (
            <ScrollView>
                {
                    types.map((type,index) => {
                        return type === 'hot'?this._renderHot(areaData[type]):(
                            <View key={index}>
                                <Text style={AreaSelectStyle.cityHeader}>{type}</Text>
                                {areaData[type].map((city,index) => {
                                    return (
                                        <TouchableOpacity key={index} onPress={this._onCityPress(city.areaCode,city.name)}>
                                            <View style={AreaSelectStyle.cityItem}>
                                                <Text style={AreaSelectStyle.cityItemText}>{city.name}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    );
                                })}
                            </View>
                        );
                    })
                }
            </ScrollView>
        );
    }
    render(){
        return (
            <View style={AreaSelectStyle.container}>
                {this._renderArea()}
                {this._renderTypes()}
            </View>
        );
    }
}

AreaSelect.defaultProps = {
    areaData:{}
};

AreaSelect.propTypes = {
    onSelect:PropTypes.func,
    currentAreaCode:PropTypes.string,
    areaData:PropTypes.object
};

export default AreaSelect;