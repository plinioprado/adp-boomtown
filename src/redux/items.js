
// Reducers

export const SELECT_FILTER_ITEMS = 'SELECT_FILTER_ITEMS';
export const SHOW_BORROW_MODAL = 'SHOW_BORROW_MODAL';

const initialState = {
  filterList: [
    'Electronics',
    'Household Items',
    'Musical Instruments',
    'Phisical Media',
    'Recreational Equipment',
    'Sporting Goods',
    'Tools'],
  filterValues: [],
  borrowModal: {
    id: 0,
    title: '',
    ownerName: ''
  }
};

export default function ItemsReducer(state = initialState, action) {
  switch (action.type) {
  case SELECT_FILTER_ITEMS:
    return { ...state, filterValues: action.payload.filterValues };
  case SHOW_BORROW_MODAL:
    return {
      ...state,
      borrowModal: {
        id: action.payload.id
      }
    };
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

export const showBorrowModal = (id) => (
  {
    type: SHOW_BORROW_MODAL,
    payload: {
      id: id
    }
  }
);
