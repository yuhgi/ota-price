export const DEPARTURE_CITY_SELECT = 'DEPARTURE_SELECT';  // 出发地选择
export const DESTINATION_CITY_SELECT = 'DESTINATION_SELECT'; // 目的地选择


export const depatureCitySelect = (areaCode,name) => {
    return {
        type:DEPARTURE_CITY_SELECT,
        areaCode:areaCode,
        name:name
    };
};



