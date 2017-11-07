import React from 'react';
import {View,Text} from 'react-native';
import Calendar from '../../../common/Calendar';

class DateSelect extends React.Component {
    render(){
        return (
            <Calendar 
                onSelect={this.onSelect.bind(this)} 
                year={this.props.year} 
                month={this.props.month}
                date={this.props.date}
            />
        );
    }
}

export default DateSelect;