import { ADD_CLIENT } from '../Actions/addCliente';
import { REMOVE_CLIENT } from '../Actions/removeAction';

const INITIAL_STATE = {
  clients: []
}

export const addClientReducer = (state = INITIAL_STATE, action) => {
  console.log([...state.clients.filter((client) => client.name !== action.name)]);
  switch (action.type) {
    case ADD_CLIENT:
      return { ...state, clients: [ ...state.clients, action.client ] }
    case REMOVE_CLIENT:
      return { ...state, clients: [...state.clients.filter((client) => client.name !== action.name)] }
    default:
      return state;
  }
}
