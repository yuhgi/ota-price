import {connect} from 'react-redux';
import {destinationCitySelect} from './redux';
import CitySelect from '../DepartureCitySelect/component';

const mapStateToProps = (state) => {
    return {
        currentAreaCode:state.departureCity.areaCode
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSelect:(areaCode,name) => {
            dispatch(destinationCitySelect(areaCode,name));
        }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(CitySelect);