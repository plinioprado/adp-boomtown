
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const RENDER_ITEMS = 'RENDER_ITEMS';

export const login = () => ({ type: LOGIN });
export const logout = () => ({ type: LOGOUT });

export const renderItems = (items) => ({
  type: RENDER_ITEMS,
  payload: {
    itemsData: items,
    loading: false
  }
});

export function getItems() {
  return function (dispatch) {
    Promise.all(['http://localhost:3001/items', 'http://localhost:3001/users'].map(url => (
      fetch(url).then(response => response.json())
    ))).then(json => {
      const [items, users] = json;
      const itemsWithOwners = items.map(item => {
        const itemOwner = users.filter(user => user.id === item.itemOwner);
        item.itemOwner = itemOwner[0];
        return item;
      });
      dispatch(renderItems(itemsWithOwners));
    });
  };
}

