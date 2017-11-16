import {connect} from 'react-redux';
import {destinationCitySelect} from './redux';
import DestinationCitySelect from './component';
import {NavigationActions} from 'react-navigation';
import {ROUTES} from '../../router/AppNavigator/navigator';

const mapStateToProps = (state) => {
    return {
        currentAreaCode:state.search.destinationInfo.destinationCity.areaCode,
        areaList:state.search.destinationInfo.destinationCityList
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSelect:(areaCode,name) => {
            dispatch(NavigationActions.navigate({routeName:ROUTES.OtaGroupList}));
            dispatch(destinationCitySelect(areaCode,name));
        }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(DestinationCitySelect);