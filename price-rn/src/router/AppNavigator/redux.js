import { NavigationActions } from 'react-navigation';

import AppNavigator from './navigator';

const initialState = AppNavigator.router.getStateForAction(
    AppNavigator.router.getActionForPathAndParams('Home')
);

export default function (state = initialState, action) {
    const nextState = AppNavigator.router.getStateForAction(action, state);

    return nextState || state;
}