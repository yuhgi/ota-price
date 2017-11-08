import {combineReducers} from 'redux';

import search from '../components/DepartureCityScreen/redux';
import route from '../router/RootRouter/redux';

const appReducer = combineReducers({
    search,
    route
});

export default appReducer;