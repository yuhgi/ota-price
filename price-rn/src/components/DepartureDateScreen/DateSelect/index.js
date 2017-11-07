import {connect} from 'react-redux';
import {depatureDateSelect} from './redux';
import DateSelect from './component';

const mapStateToProps = (state) => {
    return {
        year:state.departureDate.year,
        month:state.departureDate.month,
        date:state.departureDate.date
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSelect:(year,month,date) => {
            dispatch(depatureDateSelect(year,month,date));
        }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(DateSelect);