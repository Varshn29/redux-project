import { combineReducers } from 'redux';
import { listReducer } from './listReducer';
import { productReducer } from './productReducer';

export const reducer = combineReducers({
    listOfProducts: listReducer,
    product: productReducer
})