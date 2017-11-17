import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

import FontIcon from '../../common/FontIcon';
import styles from './style';
import { ROUTES } from '../../router/AppNavigator/navigator';
import { NavigationActions } from 'react-navigation';


class OtaGroupList extends React.Component {
    constructor(props){
        super(props);
        let data = [];
        for (let i = 0; i < 50; i++) {
            data.push({ key: i, title: `group-${i}` });
        }
        this.state = {
            data:data,
            refreshing:false
        };
    }
    static navigationOptions = ({ navigation }) => {
        const { dispatch } = navigation;
        const header = (HeaderProps) => {
            return (
                <View style={styles.header}>
                    <TouchableOpacity style={styles.return} onPress={() => {
                        dispatch(NavigationActions.back());
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
                <FlatList
                    ref={(flatlist) => this._flatlist = flatlist}
                    data={this.state.data}
                    ListFooterComponent={this._footer}
                    ItemSeparatorComponent={this._separator}
                    renderItem={this._renderItem}
                    onRefresh={this._onRefresh.bind(this)}
                    refreshing={this.state.refreshing}
                    onEndReached={this._onEndReached.bind(this)}
                    onEndReachedThreshold={0.2}
                />
            </View>
        );
    }
    _onEndReached(){
        this.setState({
            refreshing:true
        });
        this._refreshTimer = setTimeout(() => {
            clearTimeout(this._refreshTimer);
            let data = this.state.data;
            for (let i = data.length,len=data.length; i < len + 10; i++) {
                data.push({ key: i, title: `group-${i}` });
            }
            this.setState({
                data:data,
                refreshing:false
            });
        },1000);
    }
    _onRefresh(){
        this.setState({
            refreshing:true
        });
        setTimeout(() => {
            this.setState({
                refreshing:false
            });
        });
    }
    _footer() {
        return <Text>这是尾部</Text>;
    }
    _separator() {
        return <View style={{ height: 2, backgroundColor: '#eee' }} />;
    }
    _renderItem(data) {
        return (
            <View>
                <Text style={{color:'#000',fontSize:16}}>{data.item.title}</Text>
            </View>
        );
    }
}

export default OtaGroupList;