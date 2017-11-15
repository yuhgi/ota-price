import {combineReducers} from 'redux';

import search from '../components/Search/redux';
import route from '../router/AppNavigator/redux';

const appReducer = combineReducers({
    search,
    route
});

export default appReducer;