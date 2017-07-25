// Action types

export const UPDATE_AUTH_STATE = 'UPDATE_AUTH_STATE';
export const SHOW_LOGIN_ERROR = 'LOGIN_ERROR';
// export const SHOW_JOIN_MODAL = 'SHOW_JOIN_MODAL';

// Action creators

export function updateAuthState(profile) {
  return {
    type: UPDATE_AUTH_STATE,
    payload: {
      profile: profile
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

// export function showJoinModal() {
//   return {
//     type: LOGIN_ERROR,
//     payload: {
//       showJoinModal: true
//     }
//   };
// }
