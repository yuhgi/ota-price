import {combineReducers} from 'redux';

import departureCity from '../DepartureCitySelect/redux';
import destinationCity from '../DestinationCitySelect/redux';
import hotCities from './HotCity/redux';

export default combineReducers({
    departureCity,
    destinationCity,
    hotCities
});