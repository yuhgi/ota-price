import * as types from './types';
export const depatureCitySelect = (areaCode,name) => {
    return {
        type:types.DEPARTURE_CITY_SELECT,
        areaCode:areaCode,
        name:name
    };
};

export const destinationCitySelect = (areaCode,name) => {
    return {
        type:types.DESTINATION_CITY_SELECT,
        areaCode:areaCode,
        name:name
    };
};

export const depatureDateSelect = (year,month,date) => {
    return {
        type:types.DEPARTURE_DATE_SELCT,
        year:year,
        month:month,
        date:date
    };
};