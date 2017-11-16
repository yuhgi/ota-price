import React from 'react';
import { View, Text ,TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import DepartureStyle from './style';
import FontIcon from '../../common/FontIcon';
import AreaSelect from '../../common/AreaSelect';

class DepartureCitySelect extends React.Component {
    static navigationOptions = ({ navigation }) => {
        const {goBack} = navigation;
        const header = (HeaderProps) => {
            return (
                <View style={DepartureStyle.header}>
                    <TouchableOpacity style={DepartureStyle.return} onPress={() => {goBack();}}>
                        <FontIcon style={DepartureStyle.returnText} font="&#xe8bb;" />
                    </TouchableOpacity>
                    <Text style={DepartureStyle.headerTitle}>出发地选择</Text>
                </View>
            );
        };
        return {
            header: header
        };
    };
    _onSelect(areaCode, name) {
        this.props.onSelect && this.props.onSelect(areaCode, name);
    }
    _onReturnPress(){
        this.props.onReturn && this.props.onReturn();
    }
    render() {
        return (
            <View style={DepartureStyle.container}>
                <AreaSelect
                    areaList={this.props.areaList}
                    onSelect={this._onSelect.bind(this)}
                    currentAreaCode={this.props.currentAreaCode}
                />
            </View>
        );
    }
}

DepartureCitySelect.propTypes = {
    onReturn:PropTypes.func, // 返回上一页
    onSelect: PropTypes.func, // 选中出发地
    currentAreaCode: PropTypes.string, // 当前出发地
    areaList: PropTypes.object // 所有出发地
};

export default DepartureCitySelect;