
import {connect} from 'react-redux';
import SearchCriteria from './component';
import {actionCreators} from '../redux';

const mapDispatchToProps = (dispatch) => {
    return {
        onDeparturePress:() => {
            dispatch(actionCreators.departureCitySelectShow());
        },
        onDestinationPress:() => {
            dispatch(actionCreators.destinationCitySelectShow());
        }
    };
};

const mapStateToProps = (state) => {
    return {
        departureCity:state.search.departureCity,
        destinationCity:state.search.destinationCity
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(SearchCriteria);
