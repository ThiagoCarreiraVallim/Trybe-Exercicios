import { LOGIN, LOGIN_VALUE} from '../Actions/loginAction';

const INITIAL_STATE = {
  login: false,
  loginValue: { email: '', password: '' }
}

export const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, login: true };
    case LOGIN_VALUE:
      return { ...state, loginValue: { ...state.loginValue, [action.name]: action.value } }
    default:
      return state;
  }
}
