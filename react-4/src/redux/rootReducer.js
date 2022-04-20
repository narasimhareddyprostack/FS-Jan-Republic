import { productReducer } from './product/product.reducer'
import { combineReducers } from 'redux';

let rootReducer = combineReducers({ product: productReducer });
export { rootReducer }