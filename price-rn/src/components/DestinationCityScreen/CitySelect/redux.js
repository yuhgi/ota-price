export const DESTINATION_CITY_SELECT = 'DEPARTURE_SELECT';  // 出发地选择

export const destinationCitySelect = (areaCode,name) => {
    return {
        type:DESTINATION_CITY_SELECT,
        areaCode:areaCode,
        name:name
    };
};

export default function (state = {
    areaCode: '310000',
    name: '上海'
}, action) {
    switch (action.type) {
        case DESTINATION_CITY_SELECT:
            return {
                areaCode: action.areaCode,
                name: action.name
            };
        default:
            return state;
    }
}