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
            // 使用reset，将DestinationCitySelect这一层去掉
            dispatch(NavigationActions.reset({
                index:1,
                actions:[
                    NavigationActions.navigate({routeName:ROUTES.Home}),
                    NavigationActions.navigate({routeName:ROUTES.OtaGroupList})
                ]
            }));
            dispatch(destinationCitySelect(areaCode,name));
        }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(DestinationCitySelect);