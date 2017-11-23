

import React from 'react';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import AppNavigator from './router/AppNavigator';

import appReducer from './reducers';

const logger = createLogger();

const store = createStore(
    appReducer,
    applyMiddleware(
        thunk,
        logger
    )
);

export default class App extends React.Component{
    render(){
        return (
            <Provider store={store}>
                <AppNavigator />
            </Provider>        
        );
    }
}