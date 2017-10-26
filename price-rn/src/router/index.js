import { StackNavigator } from 'react-navigation';

import SearchScreen from '../components/SearchScreen';
import DepartureScreen from '../components/DepartureScreen';
import DestinationScreen from '../components/DestinationScreen';
import CalendarScreen from '../components/CalendarScreen';
import OtaProductListScreen from '../components/OtaProductListScreen';

const RootNavigatorConfig = {
    headerMode:"float"
};

const RootNavigator = StackNavigator({
    Home: {
        screen: SearchScreen // 搜索页面
    },
    CalendarScreen:{
        screen:CalendarScreen
    },
    DepartureScreen: {
        screen: DepartureScreen // 出发地选择页面
    },
    DestinationScreen:{
        screen:DestinationScreen // 目的地选择页面
    },
    OtaProductListScreen:{
        screen:OtaProductListScreen // 旅游产品列表
    }
},RootNavigatorConfig);

export default RootNavigator;