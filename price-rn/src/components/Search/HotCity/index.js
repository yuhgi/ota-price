import HotCity from './component';
import {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation';
import {ROUTES} from '../../../router/AppNavigator/navigator';
import {destinationCitySelect} from '../../DestinationCitySelect/redux';

const mapStateToProps = (state) => {
    return {
        cities:[...state.search.hotCities]
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onCityPress:(areaCode,name) => {
            dispatch(destinationCitySelect(areaCode,name));
            dispatch(NavigationActions.navigate({routeName:ROUTES.OtaGroupList}));
        }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(HotCity);