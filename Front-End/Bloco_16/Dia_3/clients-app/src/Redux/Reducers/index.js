import { loginReducer } from './loginReducer';
import { addClientReducer } from './addClientReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  loginReducer,
  addClientReducer,
});
