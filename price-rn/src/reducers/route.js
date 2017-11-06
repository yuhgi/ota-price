import AppNavigator from '../router';

const initialState = AppNavigator.router.getStateForAction(
    AppNavigator.router.getActionForPathAndParams('Home')
);

const route = (state = initialState, action) => {
    const nextState = AppNavigator.router.getStateForAction(action, state);
    return nextState || state;
};

export default route;