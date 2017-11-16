import {connect} from 'react-redux';
import {departureCitySelect} from './redux';
import DepartureCitySelect from './component';
import {NavigationActions} from 'react-navigation';
import {ROUTES} from '../../router/AppNavigator/navigator';

const mapStateToProps = (state) => {
    return {
        currentAreaCode:state.search.departureInfo.departureCity.areaCode,
        areaList:state.search.departureInfo.departureCityList
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onReturn:() => {
            dispatch(NavigationActions.back());
        },
        onSelect:(areaCode,name) => {
            dispatch(NavigationActions.back());
            dispatch(departureCitySelect(areaCode,name));
        }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(DepartureCitySelect);