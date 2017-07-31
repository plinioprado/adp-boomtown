
// Reducers

export const UPDATE_AUTH_STATE = 'UPDATE_AUTH_STATE';
export const SHOW_LOGIN_ERROR = 'SHOW_LOGIN_ERROR';
export const REDIRECT_SIGNIN = 'REDIRECT_SIGNIN';

const initialState = {
  redirectedSignin: false,
  loggedUser: null,
  error: null
};

export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
  case REDIRECT_SIGNIN:
    return { ...state, redirectedSignin: action.payload.redirectedSignin };
  case SHOW_LOGIN_ERROR:
    return { ...state, error: action.payload.error };
  case UPDATE_AUTH_STATE:
    return { ...state, loggedUser: action.payload.loggedUser };
  default:
    return state;
  }
}

// Actions

export function redirectSignin(bool) {
  return {
    type: REDIRECT_SIGNIN,
    payload: {
      redirectedSignin: bool
    }
  };
}

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
