import {combineReducers} from 'redux';

import search from './search';
import route from './route';

const appReducers = combineReducers({
    search,
    route
});

export default appReducers;