import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import CalendarStyle from './style';


function isLeapYear(year) {
    return (year % 4 === 0 && !year % 100 === 0) || year % 400 === 0;
}
function getDaysList(year, month) {
    let arr = [];
    let results = [];
    if (typeof year !== 'number') {
        return arr;
    }
    if (year < 1000 && year > 9999) {
        return arr;
    }
    if (typeof month !== 'number') {
        return arr;
    }
    if (month <= 0 && month > 12) {
        return arr;
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
        arr.push({
            day: i,
            date: prevEndDate - (startDay - i) + 1
        });
    }

    for (let i = startDate, end = daysInMonth[month - 1]; i < end; i++) {
        arr.push({
            day: (startDay + i - startDate + 7) % 7,
            date: i
        });
    }

    for(let i = endDay;i<7;i++){
        let nextStartDate = 1;
        arr.push({
            day:i,
            date:nextStartDate + (i-endDay)
        });
    }

    for(let i=0,len =arr.length;i<len;i++){
        if(i%7=0){
            
        }
    }

    return results;
}

console.log(getDaysList(2017, 11),getDaysList(2017, 11).length);




const Weekdays = ['日', '一', '二', '三', '四', '五', '六'];


class Calendar extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View>
                <View style={CalendarStyle.weekdays}>
                    {Weekdays.map((weekday) => {
                        return <Text key={weekday} style={CalendarStyle.weekdaysItem}>{weekday}</Text>
                    })}
                </View>
                <View style={CalendarStyle.month}>
                    <Text>2017年10月</Text>
                </View>
                <View>

                </View>
            </View>
        );
    }
}

Calendar.propTypes = {
    onSelect: PropTypes.func
}


export default Calendar;