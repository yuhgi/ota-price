import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import AppWithNavigationState from './containers/AppWithNavigationState';
import appReducers from './reducers';

const store = createStore(appReducers);

export default class Root extends React.Component{
    render(){
        return (
            <Provider store={store}>
                <AppWithNavigationState />
            </Provider>        
        );
    }
}