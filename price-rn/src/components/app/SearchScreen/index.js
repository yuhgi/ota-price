import React from 'react';
import { View, Text } from 'react-native';
import { WhiteSpace, WingBlank, Button } from 'antd-mobile';
import FontIcon from '../../common/FontIcon';

class Search extends React.Component {
    constructor(props) {
        super(props);
    }
    calendarClick() {
        this.props.navigation.navigate('CalendarScreen');
    }
    departureClick() {
        this.props.navigation.navigate('DepartureScreen');
    }
    destinationClick() {
        this.props.navigation.navigate('DestinationScreen');
    }
    searchClick() {
        this.props.navigation.navigate('OtaProductListScreen');
    }
    render() {
        return (
            <View>
                <WingBlank>
                    <WhiteSpace size="lg"></WhiteSpace>
                    <Button onClick={() => { this.calendarClick() }}>日历</Button>
                    <WhiteSpace size="lg"></WhiteSpace>
                    <Button inline size="small" onClick={() => { this.departureClick() }}>
                        出发地
                    </Button>
                    <Button inline size="small" onClick={() => { this.destinationClick() }}>
                        目的地
                    </Button>
                    <WhiteSpace size="lg"></WhiteSpace>
                    <Button onClick={() => { this.searchClick() }}>查询</Button>
                    <FontIcon font="&#xe698;" />
                </WingBlank>
            </View>
        );
    }
}

export default Search;