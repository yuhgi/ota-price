import React, { Component } from 'react';
import { Text, View, TouchableHighlight, TouchableOpacity } from 'react-native';
import FontIcon from '../FontIcon';
import PropTypes from 'prop-types';
import { pad, getPrevMonth, getNextMonth } from '../../../utils/dateUtil'
import CalendarStyle from './style';

const Weekdays = ['日', '一', '二', '三', '四', '五', '六'];

function isLeapYear(year) {
    return (year % 4 === 0 && !year % 100 === 0) || year % 400 === 0;
}
function getDatesList(year, month) {
    let allDates = [];
    let results = [];
    if (typeof year !== 'number') {
        return allDates;
    }
    if (year < 1000 && year > 9999) {
        return allDates;
    }
    if (typeof month !== 'number') {
        return allDates;
    }
    if (month <= 0 && month > 12) {
        return allDates;
    }

    let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (isLeapYear(year)) {
        daysInMonth[1] = 29;
    }

    let start = new Date();
    let startDate = 1;
    start.setFullYear(year, month - 1, 1);
    let startDay = start.getDay();

    let endDate = daysInMonth[month - 1];
    let end = new Date();
    end.setFullYear(year, month - 1, endDate);
    let endDay = end.getDay();

    for (let i = 0; i < startDay; i++) {
        let prevEndDate = daysInMonth[month - 2];
        allDates.push({
            current: false,
            day: i,
            date: prevEndDate - (startDay - i) + 1
        });
    }

    for (let i = startDate, end = daysInMonth[month - 1]; i <= end; i++) {
        allDates.push({
            current: true,
            day: (startDay + i - startDate + 7) % 7,
            date: i
        });
    }

    for (let i = endDay; i < 7; i++) {
        let nextStartDate = 1;
        allDates.push({
            current: false,
            day: i,
            date: nextStartDate + (i - endDay)
        });
    }

    let temp;
    for (let i = 0, len = allDates.length; i < len; i++) {
        if (i % 7 === 0) {
            temp = [];
        }
        temp.push(allDates[i]);
        if (i % 7 === 6) {
            results.push(temp);
        }
    }

    return results;
}

class Calendar extends Component {
    constructor(props) {
        super(props);
        const date = new Date();
        this.state = {
            year: this.props.year || date.getFullYear(),
            month: this.props.month || date.getMonth() + 1,
            date: this.props.date || date.getDate(),
            barYear: this.props.year || date.getFullYear(),
            barMonth: this.props.month || date.getMonth() + 1,
        };
    }
    _onPrevPress() {
        let prev = getPrevMonth(this.state.barYear, this.state.barMonth);
        if (!prev) { return; }
        this.setState({
            barYear: prev.year,
            barMonth: prev.month
        });
    }
    _onNextPress() {
        let next = getNextMonth(this.state.barYear, this.state.barMonth);
        if (!next) { return; }
        this.setState({
            barYear: next.year,
            barMonth: next.month
        });
    }
    _onCellPress(year, month, date) {
        this.setState({
            year: year,
            month: month,
            date: date
        });
        this.onSelect && this.onSelect(year, month, date);
    }
    _renderCell(weekDates) {
        let { year, month, date, barYear, barMonth } = this.state;
        return weekDates.map((item, index) => {
            let dateStyle = [CalendarStyle.dateCell];
            if (year === barYear && month === barMonth && date === item.date && item.current) {
                dateStyle.push(CalendarStyle.selectedCell);
            }
            return item.current?(
                <TouchableOpacity style={dateStyle} key={index} 
                    onPress={this._onCellPress.bind(this, barYear, barMonth, item.date)}
                >
                    <View>
                        <Text>
                            {item.date}
                        </Text>
                    </View>
                </TouchableOpacity>
            ):(
                <View style={dateStyle}>
                    <Text>
                        {''}
                    </Text>
                </View>
            );
        });
    }
    render() {
        const allDates = getDatesList(this.state.barYear, this.state.barMonth);

        return (
            <View>
                <View style={CalendarStyle.weekdays}>
                    {Weekdays.map((weekday) => {
                        return <Text key={weekday} style={CalendarStyle.weekdayItem}>{weekday}</Text>;
                    })}
                </View>
                <View style={CalendarStyle.month}>
                    <TouchableOpacity onPress={this._onPrevPress.bind(this)}>
                        <View>
                            <FontIcon font="&#xe8bb;" />
                        </View>
                    </TouchableOpacity>
                    <View>
                        <Text>
                            {pad(this.state.barYear, 4)}年{pad(this.state.barMonth, 2)}月
                        </Text>
                    </View>
                    <TouchableOpacity onPress={this._onNextPress.bind(this)}>
                        <View><FontIcon font="&#xe8ad;" /></View>
                    </TouchableOpacity>
                </View>
                <View style={CalendarStyle.dateTable}>
                    {allDates.map((weekDates, index) => {
                        return (
                            <View style={CalendarStyle.dateRow} key={index}>
                                {this._renderCell(weekDates)}
                            </View>
                        );
                    })}
                </View>
            </View>
        );
    }
}

Calendar.propTypes = {
    onSelect: PropTypes.func,
    year: PropTypes.number,
    month: PropTypes.number,
    date: PropTypes.number
};


export default Calendar;