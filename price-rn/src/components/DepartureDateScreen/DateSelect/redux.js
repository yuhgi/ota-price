export const DEPARTURE_DATE_SELCT = 'DEPARTURE_DATE_SELCT'; // 出发日期选择

export const depatureDateSelect = (year, month, date) => {
    return {
        type: DEPARTURE_DATE_SELCT,
        year: year,
        month: month,
        date: date
    };
};

const generateInitialState = function () {
    // 后期从localStorage里面取用户记录
    let now = new Date();
    return {
        year: now.getFullYear(),
        month: now.getMonth() + 1,
        date: now.getDate()

    };
};

export default function (state = generateInitialState(), action) {
    switch (action.type) {
        case DEPARTURE_DATE_SELCT:
            return {
                departureCity: state.departureCity,
                destinationCity: state.destinationCity,
                departureDate: {
                    year: action.year,
                    month: action.month,
                    date: action.date
                }
            };
        default: return state;
    }
}