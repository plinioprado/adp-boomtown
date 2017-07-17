import { LOAD_PROFILE } from './../actions/profiles';

const initialState = {
  profile: {},
  loading: true,
  dropShow: false
};

export default function ProfilesReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PROFILE:
      return { ...state, loading: false, profile: action.payload.profile, dropShow: false };
    default:
      return state;
  }
}