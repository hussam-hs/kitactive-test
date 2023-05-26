// Action Types
export const SET_TOKEN = 'SET_TOKEN';
export const DROP_TOKEN = 'DROP_TOKEN';

// Action Creators
export const setToken = (token) => async (dispatch) => {
  dispatch({ type: SET_TOKEN, payload: token });
};

export const dropToken = () => async (dispatch) => {
  dispatch({ type: DROP_TOKEN });
};