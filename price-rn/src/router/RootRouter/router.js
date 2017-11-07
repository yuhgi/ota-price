import React from 'react';
import { StackNavigator } from 'react-navigation';

import SearchScreen from '../../components/SearchScreen';
import DepartureCityScreen from '../../components/DepartureCityScreen';
import DepartureDateScreen from '../../components/DepartureDateScreen';
import DestinationCityScreen from '../../components/DestinationCityScreen';
import OtaProductListScreen from '../../components/OtaProductListScreen';

const RootNavigatorConfig = {
    headerMode: 'float'
};

export default StackNavigator({
    Home: {
        screen: SearchScreen // 搜索页面
    },
    OtaProductListScreen: {
        screen: OtaProductListScreen // 旅游产品列表
    },
    DepartureCityScreen:{
        screen: DepartureCityScreen
    },
    DestinationCityScreen:{
        screen:DestinationCityScreen
    },
    DepartureDateScreen:{
        screen:DepartureDateScreen
    }
}, RootNavigatorConfig);
