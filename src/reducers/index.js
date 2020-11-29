import cartReducer from './cart-reducer'

import { combineReducers } from 'redux';

import { routerReducer } from 'react-router-redux';

export default combineReducers({
    cartReducer,
    router: routerReducer
});