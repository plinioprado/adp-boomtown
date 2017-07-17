import { LOAD_FILTER_ITEMS, LOAD_ITEMS, SELECT_FILTER_ITEMS } from './../actions/items';

const initialState = {
  filterList: [],
  itemsData: [],
  itemsDataFiltered: [],
  loading: true,
  dropShow: false,
  filterValues: []
};

export default function ItemsReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_FILTER_ITEMS:
      return { ...state, filterValues: action.payload.filterValues, itemsDataFiltered: action.payload.itemsDataFiltered };
    case LOAD_FILTER_ITEMS:
      return { ...state, filterList: action.payload.filterList };
    case LOAD_ITEMS:
      return { ...state,
        loading: action.payload.loading,
        itemsData: action.payload.itemsData,
        itemsDataFiltered: action.payload.itemsDataFiltered,
        dropShow: action.payload.dropShow };
    default:
      return state;
  }
}
