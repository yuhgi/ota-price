import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import FontIcon from '../../common/FontIcon';
import styles from './style';
import {ROUTES} from '../../router/AppNavigator/navigator';
import {NavigationActions} from 'react-navigation';

function getKey(scenes,routeName){
    let key;
    for( let scene of scenes ){
        if(scene.route.routeName === routeName){
            key = scene.route.key;
            break;
        }
    }
    return key;
}

class OtaGroupList extends React.Component {
    static navigationOptions = ({ navigation }) => {
        const { dispatch } = navigation;
        const header = (HeaderProps) => {
            const homeKey = getKey(HeaderProps.scenes,ROUTES.DestinationCitySelect) || null;
            console.log(homeKey);
            return (
                <View style={styles.header}>
                    <TouchableOpacity style={styles.return} onPress={() => { 
                        dispatch(NavigationActions.reset({
                            index:0,
                            actions:[
                                NavigationActions.navigate({routeName:ROUTES.Home})
                            ]
                        }));
                    }}
                    >
                        <FontIcon style={styles.returnText} font="&#xe8bb;" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>组信息</Text>
                </View>
            );
        };
        return {
            header
        };
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>分类列表</Text>
            </View>
        );
    }
}

export default OtaGroupList;