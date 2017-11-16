import React from 'react';
import { View, Text ,TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import AreaSelect from '../../common/AreaSelect';
import DestinationStyle from './style';
import FontIcon from '../../common/FontIcon';

class DestinationCitySelect extends React.Component{
    static navigationOptions = ({ navigation }) => {
        const {goBack} = navigation;
        const header = (HeaderProps) => {
            return (
                <View style={DestinationStyle.header}>
                    <TouchableOpacity style={DestinationStyle.return} onPress={() => {goBack();}}>
                        <FontIcon style={DestinationStyle.returnText} font="&#xe8bb;" />
                    </TouchableOpacity>
                    <Text style={DestinationStyle.headerTitle}>出发地选择</Text>
                </View>
            );
        };
        return {
            header: header
        };
    };
    _onSelect(areaCode,name){
        this.props.onSelect && this.props.onSelect(areaCode,name);
    }
    render(){
        return (
            <AreaSelect 
                areaList={this.props.areaList} 
                onSelect={this._onSelect.bind(this)} 
                currentAreaCode={this.props.currentAreaCode} 
            />
        );
    }   
}

DestinationCitySelect.propTypes = {
    onSelect:PropTypes.func,
    currentAreaCode:PropTypes.string,
    areaList:PropTypes.object
};

export default DestinationCitySelect;