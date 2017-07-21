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
      borrowingList: items[0].itemOwner.borrowingList,
      email: items[0].itemOwner.email,
      fullName: items[0].itemOwner.fullName,
      borrowedCount: items[0].itemOwner.borrowedCount
    },
    items: items
  };

  return ({
    type: LOAD_PROFILE,
    payload: {
      profile: profile
    }
  });
};

export function getProfile(id) {
  let borrowingList = [];
  let borrowedCount = 0;

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
        .map(item => {
          const itemOwner = users.filter(user => user.id === item.itemOwner);
          item.itemOwner = itemOwner[0];
          return item;
        })
        .map(item => {
          const it = item;
          it.borrowerName = (it.borrower === null) ? '' : users.filter(u => u.id === it.borrower)[0].fullName;
          if (it.borrower === id) borrowingList.push(it.title + ' from ' + it.itemOwner.fullName);
          if (it.itemOwner.id === id && it.borrower !== null) borrowedCount += 1;
          return it;
        })
        .filter(it => (it.itemOwner.id === id));
      itemsWithOwners[0].itemOwner.borrowingList = borrowingList;
      itemsWithOwners[0].itemOwner.borrowedCount = borrowedCount;
      console.log(itemsWithOwners[0]);
      dispatch(renderProfile(itemsWithOwners));
    })
    .catch(() => null);
  };
}

