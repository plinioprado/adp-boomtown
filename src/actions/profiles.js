/*
 * action types
 */

export const LOAD_PROFILE = 'LOAD_PROFILE';

/*
 * action creators
 */

export const renderProfile = (items) => {
  const profile = {
    user: {
      bio: items[0].itemOwner.bio,
      borrowingList: ['Item 1', 'Item 2', 'Item 3'],
      email: items[0].itemOwner.email,
      fullName: items[0].itemOwner.fullName,
      sharingList: []
    },
    items: items
  };

  return ({
    type: LOAD_PROFILE,
    payload: {
      profile: profile
    }
  })
};

export function getProfile(id) {
  return function gp(dispatch) {
    Promise.all(['http://localhost:3001/items', 'http://localhost:3001/users'].map(url => (
      fetch(url)
        .then(response => {
          if (response.status !== 200) throw new Error('Error accessing data');
          return response.json();
        })
    ))).then(json => {
      const [items, users] = json;
      const itemsWithOwners = items
        .filter(it => (it.itemOwner === id))
        .map(item => {
          const itemOwner = users.filter(user => user.id === item.itemOwner);
          item.itemOwner = itemOwner[0];
          return item;
        });
      dispatch(renderProfile(itemsWithOwners));
    })
    .catch(() => null);
  };
}

