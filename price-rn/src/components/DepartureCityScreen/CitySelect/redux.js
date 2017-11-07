export const DEPARTURE_CITY_SELECT = 'DEPARTURE_CITY_SELECT';  // 出发地选择

export const departureCitySelect = (areaCode,name) => {
    return {
        type:DEPARTURE_CITY_SELECT,
        areaCode:areaCode,
        name:name
    };
};

export default function (state = {
    areaCode: '320100',
    name: '南京'
}, action) {
    switch (action.type) {
        case DEPARTURE_CITY_SELECT:
            return {
                areaCode: action.areaCode,
                name: action.name
            };
        default:
            return state;
    }
}