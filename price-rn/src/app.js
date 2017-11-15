

import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import AppNavigator from './router/AppNavigator';

import appReducer from './reducers';

const store = createStore(appReducer);

export default class App extends React.Component{
    render(){
        return (
            <Provider store={store}>
                <AppNavigator />
            </Provider>        
        );
    }
}