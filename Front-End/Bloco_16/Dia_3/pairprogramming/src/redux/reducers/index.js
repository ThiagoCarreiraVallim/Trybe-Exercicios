import { formReducer } from './formReducer';
import { handlerReducer } from './handlerReducer';
import { errorReducer } from './errorReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({ formReducer, handlerReducer, errorReducer });
