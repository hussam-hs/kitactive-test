import { SET_TOKEN, DROP_TOKEN } from '../actions/authActions';

const initialState = {
  token: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case DROP_TOKEN:
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};

export default authReducer;
