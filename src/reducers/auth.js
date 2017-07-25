import {
  UPDATE_AUTH_STATE,
  SHOW_LOGIN_ERROR
//  SHOW_JOIN_MODAL
} from './../actions/auth';

const initialState = {
  profile: null,
  error: null
};

export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_AUTH_STATE:
      return { ...state, profile: action.payload.profile };
    case SHOW_LOGIN_ERROR:
      return { ...state, error: action.payload.error };
    // case SHOW_JOIN_MODAL:
    //   return { ...state, showJoinModal: action.payload.showJoinModal };
    default:
      return state;
  }
}
