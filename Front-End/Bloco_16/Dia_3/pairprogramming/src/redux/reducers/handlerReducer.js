import { HANDLE_CHANGES } from '../actions/handlerAction';
import { INITIAL_STATE } from './initialState';

export const handlerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HANDLE_CHANGES:
      return { ...state, [action.name]: action.value, }
    default:
      return state;
  }
}