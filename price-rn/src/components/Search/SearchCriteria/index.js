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
        departureCity:state.search.departureInfo.departureCity,
        destinationCity:state.search.destinationInfo.destinationCity
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(SearchCriteria);
