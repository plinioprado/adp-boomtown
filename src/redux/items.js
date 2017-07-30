
// Reducers

export const SELECT_FILTER_ITEMS = 'SELECT_FILTER_ITEMS';

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


// Actions

export const selectFilterItems = (filterValues) => {
  return {
    type: SELECT_FILTER_ITEMS,
    payload: {
      filterValues
    }
  };
};
