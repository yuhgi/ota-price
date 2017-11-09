import {connect} from 'react-redux';
import {departureCitySelect} from './redux';
import CitySelect from './component';

const mapStateToProps = (state) => {
    return {
        currentAreaCode:state.search.departureCity.areaCode
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSelect:(areaCode,name) => {
            dispatch(departureCitySelect(areaCode,name));
        }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(CitySelect);