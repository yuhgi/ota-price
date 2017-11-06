import * as actionTypes from '../actions/types';

const generateInitialState = function () {
    // 后期从localStorage里面取用户记录
    let now = new Date();
    return {
        departureCity: {
            areaCode: '',
            name: '南京'
        },
        destinationCity: {
            areaCode: '',
            name: '上海'
        },
        departureDate: {
            year: now.getFullYear(),
            month: now.getMonth() + 1,
            date: now.getDate()
        }
    };
};
const search = (state = generateInitialState(), action) => {
    switch (action) {
        case actionTypes.DEPARTURE_CITY_SELECT:
            return {
                departureCity: {
                    areaCode: action.areaCode,
                    name: action.name
                },
                destinationCity: state.destinationCity,
                departureDate: state.departureDate
            };
        case actionTypes.DESTINATION_CITY_SELECT:
            return {
                departureCity: state.departureCity,
                destinationCity: {
                    areaCode: action.areaCode,
                    name: action.name
                },
                departureDate: state.departureDate
            };
        case actionTypes.DEPARTURE_DATE_SELCT:
            return {
                departureCity: state.departureCity,
                destinationCity: state.destinationCity,
                departureDate: {
                    year:action.year,
                    month:action.month,
                    date:action.date
                }
            };
        default: return state;
    }
};
export default search;