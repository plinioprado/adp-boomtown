import { SELECT_FILTER_ITEMS } from './../actions/items';

const initialState = {
  filterList: [
    'Electronics',
    'Household Items',
    'Musical Instruments',
    'Phisical Media',
    'Recreational Equipment',
    'Sporting Goods',
    'Tools'],
  filterValues: []
};

export default function ItemsReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_FILTER_ITEMS:
      return { ...state, filterValues: action.payload.filterValues };
    default:
      return state;
  }
}
