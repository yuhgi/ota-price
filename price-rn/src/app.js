

import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import RootRouter from './router/RootRouter';

import appReducer from './reducers';

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