import {
  LOGIN,
  LOGOUT,
  RENDER_ITEMS
} from './actions';

const initialState = {
  logged: true,
  loading: true,
  itemsData: []
};

export function AppReducer(state = initialState, action) {
  switch (action.type) {
    case RENDER_ITEMS:
      return { ...state, loading: action.payload.loading, itemsData: action.payload.itemsData };
    case LOGIN:
      return { ...state, logged: true };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
}
