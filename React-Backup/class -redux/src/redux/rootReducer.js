import { combineReducers } from "redux";
import { messageReducer } from './Message/message.reducer'
let rootReducer = combineReducers({ message: messageReducer });
export { rootReducer } 