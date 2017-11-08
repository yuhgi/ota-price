import React from 'react';
import { StackNavigator } from 'react-navigation';

import Search from '../../components/Search';
import OtaGroupList from '../../components/OtaGroupList';
import OtaProductList from '../../components/OtaProductList';

const RootNavigatorConfig = {
    headerMode: 'float'
};

export default StackNavigator({
    Home: {
        screen: Search // 搜索页面
    },
    OtaProductListScreen: {
        screen: OtaProductList // 旅游产品列表
    },
    OtaGroupListScreen:{
        screen:OtaGroupList // 产品分类信息
    }
}, RootNavigatorConfig);
