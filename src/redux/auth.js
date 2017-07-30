
// Reducers

export const UPDATE_AUTH_STATE = 'UPDATE_AUTH_STATE';
export const SHOW_LOGIN_ERROR = 'SHOW_LOGIN_ERROR';

const initialState = {
  loggedUser: null,
  error: null
};

export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
  case UPDATE_AUTH_STATE:
    return { ...state, loggedUser: action.payload.loggedUser };
  case SHOW_LOGIN_ERROR:
    return { ...state, error: action.payload.error };
  default:
    return state;
  }
}

// Actions

export function updateAuthState(loggedUser) {
  return {
    type: UPDATE_AUTH_STATE,
    payload: {
      loggedUser: loggedUser
    }
  };
}

export function showLoginError(error) {
  return {
    type: SHOW_LOGIN_ERROR,
    payload: {
      error: error
    }
  };
}
