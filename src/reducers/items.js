import { LOAD_FILTER_ITEMS, LOAD_ITEMS } from './../actions/items';

const initialState = {
  filterList: [],
  itemsData: [],
  loading: true,
  dropShow: false
};

export default function ItemsReducer(state = initialState, action) {
  switch (action.type) {
    // case SELECT_FILTER_ITEMS:
    //   return { ...state };
    case LOAD_FILTER_ITEMS:
      return { ...state, filterList: action.payload.filterList };
    case LOAD_ITEMS:
      return { ...state, loading: action.payload.loading, itemsData: action.payload.itemsData, dropShow: action.payload.dropShow };
    default:
      return state;
  }
}
