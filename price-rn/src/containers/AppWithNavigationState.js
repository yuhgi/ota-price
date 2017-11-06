import React from 'react';
import {addNavigationHelpers} from 'react-navigation';
import {connect} from 'react-redux';
import AppNavigator from '../router';

class App extends React.Component{
    render(){
        return (
            <AppNavigator 
                navigation={addNavigationHelpers({
                    dispatch:this.props.dispatch,
                    state:this.props.route
                })}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    route:state.route
});

const AppWithNavigationState = connect(mapStateToProps)(App);

export default AppWithNavigationState;