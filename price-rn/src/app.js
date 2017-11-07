

import React from 'react';
import {combineReducers} from 'redux';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import RootRouter from './router/RootRouter';

import departureCity from './components/DepartureCityScreen/redux';
import departureDate from './components/DepartureDateScreen/redux';
import destinationCity from './components/DestinationCityScreen/redux';
import route from './router/RootRouter/redux';

const appReducer = combineReducers({
    departureCity,
    departureDate,
    destinationCity,
    route
});

const store = createStore(appReducer);

export default class App extends React.Component{
    render(){
        return (
            <Provider store={store}>
                <RootRouter />
            </Provider>        
        );
    }
}