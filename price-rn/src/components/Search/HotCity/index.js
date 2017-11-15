import HotCity from './component';
import {connect} from 'react-redux';
import {destinationCitySelect} from '../../DestinationCitySelect/redux';

const mapStateToProps = (state) => {
    return {
        cities:[...state.search.hotCities]
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSelect:(areaCode,name) => {
            dispatch(destinationCitySelect(areaCode,name));
        }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(HotCity);