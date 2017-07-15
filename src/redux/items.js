
export const LOAD_ITEMS = 'LOAD_ITEMS';

export const renderItems = (items) => ({
  type: LOAD_ITEMS,
  payload: {
    itemsData: items,
    loading: false,
    dropShow: true
  }
});

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

