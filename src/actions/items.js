/*
 * action types
 */

export const LOAD_ITEMS = 'LOAD_ITEMS';
export const LOAD_FILTER_ITEMS = 'LOAD_FILTER_ITEMS';
export const SELECT_FILTER_ITEMS = 'SELECT_FILTER_ITEMS';

/*
 * action creators
 */

export const renderItems = (items) => ({
  type: LOAD_ITEMS,
  payload: {
    itemsData: items,
    itemsDataFiltered: items,
    loading: false,
    dropShow: true
  }
});

const testCommonItem = (item, vals) => {
  let ok = false;
  item.tags.forEach(tag => {
    vals.forEach(val => {
      if (val === tag) ok = true;
    });
  });
  return ok;
};

export const selectFilterItems = (itemsData, filterValues) => {
  return {
    type: SELECT_FILTER_ITEMS,
    payload: {
      filterValues: filterValues,
      itemsDataFiltered: itemsData.filter(item => testCommonItem(item, filterValues)) // for each item, does the array tags include any of the items in filtervalues array?
    }
  };
};

export function getItems() {
  return function gi(dispatch) {
    Promise.all(['http://localhost:3001/items', 'http://localhost:3001/users'].map(url => (
      fetch(url)
        .then(response => {
          if (response.status !== 200) throw new Error('Error accessing data');
          return response.json();
        })
    ))).then(json => {
      const [items, users] = json;
      const itemsWithOwners = items.map(item => {
        const itemOwner = users.filter(user => user.id === item.itemOwner);
        item.itemOwner = itemOwner[0];
        return item;
      });
      dispatch(renderItems(itemsWithOwners));
    })
    .catch(() => null);
  };
}

export const loadFilterItems = () => {

  const filterList = [
    'Electronics',
    'Household Items',
    'Musical Instruments',
    'Phisical Media',
    'Recreational Equipment',
    'Sporting Goods',
    'Tools'];

  return ({
    type: LOAD_FILTER_ITEMS,
    payload: {
      filterList: filterList
    }
  });
};
