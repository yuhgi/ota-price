export const DESTINATION_CITY_SELECT = 'DESTINATION_CITY_SELECT';  // 目的地选择

import areaData from '../DepartureCitySelect/area';

export const destinationCitySelect = (areaCode,name) => {
    return {
        type:DESTINATION_CITY_SELECT,
        areaCode:areaCode,
        name:name
    };
};

const initialState = {
    destinationCity:{
        areaCode: '310000',
        name: '上海'
    },
    destinationCityList:areaData
};

export default function (state = initialState, action) {
    switch (action.type) {
        case DESTINATION_CITY_SELECT:
            return {
                ...state,
                destinationCity:{
                    areaCode: action.areaCode,
                    name: action.name
                }
            };
        default:
            return state;
    }
}