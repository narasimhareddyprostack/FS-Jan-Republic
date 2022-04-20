import { rootReducer } from './rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux'
let store = createStore(rootReducer, composeWithDevTools());

export { store }