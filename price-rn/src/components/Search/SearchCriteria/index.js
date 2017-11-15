import {NavigationActions} from 'react-navigation';
import {connect} from 'react-redux';
import SearchCriteria from './component';
import {ROUTES} from '../../../router/AppNavigator/navigator';

const mapDispatchToProps = (dispatch) => {
    return {
        onDeparturePress:() => {
            dispatch(NavigationActions.navigate({routeName:ROUTES.DepartureCitySelect}));
        },
        onDestinationPress:() => {
            dispatch(NavigationActions.navigate({routeName:ROUTES.DestinationCitySelect}));
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
