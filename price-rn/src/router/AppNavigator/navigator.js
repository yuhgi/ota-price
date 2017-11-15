import React from 'react';
import { StackNavigator } from 'react-navigation';

import Search from '../../components/Search';
import OtaGroupList from '../../components/OtaGroupList';
import OtaProductList from '../../components/OtaProductList';
import DepartureCitySelect from '../../components/DepartureCitySelect';
import DestinationCitySelect from '../../components/DestinationCitySelect';

const ROUTES = {
    Home:'Home',
    OtaProductList:'OtaProductList',
    OtaGroupList:'OtaGroupList',
    DestinationCitySelect:'DestinationCitySelect',
    DepartureCitySelect:'DepartureCitySelect'
};
export {ROUTES};


const AppNavigator =  StackNavigator({
    Home: {
        screen: Search // 搜索页面
    },
    OtaProductList: {
        screen: OtaProductList // 旅游产品列表
    },
    OtaGroupList:{
        screen:OtaGroupList // 产品分类信息
    },
    DestinationCitySelect:{
        screen:DestinationCitySelect
    },
    DepartureCitySelect:{
        screen:DepartureCitySelect
    }
});

console.log(AppNavigator);
export default AppNavigator;
