import { ERROR_FORM } from '../actions/errorAction';

const INITIAL_STATE = {
  formError: {},
}

export const errorReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ERROR_FORM:
      return { ...state, formError: { [action.name]: action.value } }
    default:
      return state;
  }
};
