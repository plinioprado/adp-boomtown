import {
  LOAD_ITEMS
} from './items';

const initialState = {
  logged: true,
  loading: true,
  itemsData: [],
  dropShow: false
};

export function AppReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ITEMS:
      return { ...state, loading: action.payload.loading, itemsData: action.payload.itemsData, dropShow: action.payload.dropShow };
    default:
      return state;
  }
}
