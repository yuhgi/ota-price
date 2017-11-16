import {combineReducers} from 'redux';

import departureInfo from '../DepartureCitySelect/redux';
import destinationInfo from '../DestinationCitySelect/redux';
import hotCities from './HotCity/redux';

export default combineReducers({
    departureInfo,
    destinationInfo,
    hotCities
});