export const actionTypes = {
    REQUEST_HOT_CITIES:'REQUEST_HOT_CITIES',
    RECEIVE_HOT_CITIES:'RECEIVE_HOT_CITIES',
    RECEIVE_HOT_CITIES_ERROR:'RECEIVE_HOT_CITIES_ERROR'
};

export const actionCreators = {
    requestHotCities(areaCode,name){
        return {
            type:actionTypes.REQUEST_HOT_CITIES,
            areaCode,
            name
        };
    },
    receiveHotCities(hotCities){
        return {
            type:actionTypes.RECEIVE_HOT_CITIES,
            hotCities:[...hotCities]
        };
    },
    receiveHotCitiesError(errCode,errMsg){
        return {
            type:actionTypes.RECEIVE_HOT_CITIES_ERROR,
            errCode,
            errMsg
        };
    },
    fetchHotCities(){
        return (dispatch) => {

        };
    }
};


export default function(state={
    errCode:0,
    errMsg:null,
    data:[],
},action){
    return state;
}
