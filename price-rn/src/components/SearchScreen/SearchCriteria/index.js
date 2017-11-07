
import {connect} from 'react-redux';
import SearchCriteria from './component';

const mapStateToProps = (state) => {
    return {
        departureCity:state.departureCity,
        destinationCity:state.destinationCity,
        departureDate:state.departureDate
    };
};

export default connect(mapStateToProps)(SearchCriteria);
