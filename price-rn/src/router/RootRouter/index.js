import React from 'react';
import {addNavigationHelpers} from 'react-navigation';
import {connect} from 'react-redux';
import Router from './router';

class RootRouter extends React.Component{
    render(){
        return (
            <Router 
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

export default connect(mapStateToProps)(RootRouter);