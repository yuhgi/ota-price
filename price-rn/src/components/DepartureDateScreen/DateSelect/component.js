import React from 'react';
import Calendar from '../../../common/Calendar';

class DateSelect extends React.Component {
    _onSelect(year,month,date){
        this.props.onSelect && this.props._onSelect(year,month,date);
        this.props.navigation && this.props.navigation.goBack();
    }
    render(){
        return (
            <Calendar 
                onSelect={this._onSelect.bind(this)} 
                year={this.props.year} 
                month={this.props.month}
                date={this.props.date}
            />
        );
    }
}

export default DateSelect;