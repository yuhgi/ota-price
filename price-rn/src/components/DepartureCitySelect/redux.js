export const DEPARTURE_CITY_SELECT = 'DEPARTURE_CITY_SELECT';  // 出发地选择

import areaData from './area';

export const departureCitySelect = (areaCode,name) => {
    return {
        type:DEPARTURE_CITY_SELECT,
        areaCode:areaCode,
        name:name
    };
};

const initialState = {
    departureCity:{
        areaCode: '320100',
        name: '南京'
    },
    departureCityList:areaData
};

export default function (state = initialState, action) {
    switch (action.type) {
        case DEPARTURE_CITY_SELECT:
            return {
                ...state,
                departureCity:{
                    areaCode: action.areaCode,
                    name: action.name
                }
            };
        default:
            return state;
    }
}