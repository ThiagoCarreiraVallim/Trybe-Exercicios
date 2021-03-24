import { SEND_FORM, RESET_FORM } from '../actions/formAction';
import { INITIAL_STATE } from './initialState';

export const formReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEND_FORM:
      return { ...state, submitted: true };
    case RESET_FORM:
      return { INITIAL_STATE };
    default:
      return state;
  }
}