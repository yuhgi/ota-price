import { StackNavigator } from 'react-navigation';

import SearchScreen from '../components/app/SearchScreen';
import DepartureScreen from '../components/app/DepartureScreen';
import DestinationScreen from '../components/app/DestinationScreen';
import CalendarScreen from '../components/app/CalendarScreen';
import OtaProductListScreen from '../components/app/OtaProductListScreen';

const RootNavigatorConfig = {
    headerMode:'float'
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