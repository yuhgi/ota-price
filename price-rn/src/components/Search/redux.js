import {combineReducers} from 'redux';

import departureCity from './DepartureCitySelect/redux';
import destinationCity from './DestinationCitySelect/redux';
import hotCities from './HotCity/redux';


export const actionTypes = {
    DEPARTURE_CITY_SELECT_SHOW : 'DEPARTURE_CITY_SELECT_SHOW',
    DEPARTURE_CITY_SELECT_HIDE : 'DEPARTURE_CITY_SELECT_HIDE',
    DESTINATION_CITY_SELECT_SHOW : 'DESTINATION_CITY_SELECT_SHOW',
    DESTINATION_CITY_SELECT_HIDE : 'DESTINATION_CITY_SELECT_HIDE'
};

export const actionCreators = {
    departureCitySelectShow:() => {
        return {
            type:actionTypes.DEPARTURE_CITY_SELECT_SHOW
        };
    },
    departureCitySelectHide:() => {
        return {
            type:actionTypes.DEPARTURE_CITY_SELECT_HIDE
        };
    },
    destinationCitySelectShow:() => {
        return {
            type:actionTypes.DESTINATION_CITY_SELECT_SHOW
        };
    },
    destinationCitySelectHide:() => {
        return {
            type:actionTypes.DESTINATION_CITY_SELECT_HIDE
        };
    }
};


const departureCitySelectHide = (state=false,action) => {
    switch(action.type){
        case actionTypes.DEPARTURE_CITY_SELECT_SHOW:
            return true;
        case actionTypes.DEPARTURE_CITY_SELECT_HIDE:
            return false;
        default:return state;
    }
};

const departureCitySelectShow = (state=false,action) => {
    switch(action.type){
        case actionTypes.DESTINATION_CITY_SELECT_SHOW:
            return true;
        case actionTypes.DESTINATION_CITY_SELECT_HIDE:
            return false;
        default:return state;
    }
};

export default combineReducers({
    departureCity,
    destinationCity,
    hotCities,
    departureCitySelectShow,
    departureCitySelectHide
});