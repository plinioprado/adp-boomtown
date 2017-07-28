// /*
//  * action types
//  */

// export const LOAD_PROFILE = 'LOAD_PROFILE';

// /*
//  * action creators
//  */

// export const renderProfile = (items) => {
//   const profile = {
//     user: {
//       bio: items[0].itemowner.bio,
//       borrowingList: items[0].itemowner.borrowingList,
//       email: items[0].itemowner.email,
//       fullname: items[0].itemowner.fullname,
//       borrowedCount: items[0].itemowner.borrowedCount
//     },
//     items: items
//   };

//   return ({
//     type: LOAD_PROFILE,
//     payload: {
//       profile: profile
//     }
//   });
// };

// export function getProfile(id) {
//   let borrowingList = [];
//   let borrowedCount = 0;

//   return function gp(dispatch) {
//     Promise.all(['http://localhost:3001/items', 'http://localhost:3001/users'].map(url => (
//       fetch(url)
//         .then(response => {
//           if (response.status !== 200) throw new Error('Error accessing data');
//           return response.json();
//         })
//     ))).then(json => {
//       const [items, users] = json;
//       const itemsWithOwners = items
//         .map(item => {
//           const itemowner = users.filter(user => user.id === item.itemowner);
//           item.itemowner = itemowner[0];
//           return item;
//         })
//         .map(item => {
//           const it = item;
//           it.borrowerName = (it.borrower === null) ? '' : users.filter(u => u.id === it.borrower)[0].fullname;
//           if (it.borrower === id) borrowingList.push(it.title + ' from ' + it.itemowner.fullname);
//           if (it.itemowner.id === id && it.borrower !== null) borrowedCount += 1;
//           return it;
//         })
//         .filter(it => (it.itemowner.id === id));
//       itemsWithOwners[0].itemowner.borrowingList = borrowingList;
//       itemsWithOwners[0].itemowner.borrowedCount = borrowedCount;
//       console.log(itemsWithOwners[0]);
//       dispatch(renderProfile(itemsWithOwners));
//     })
//     .catch(() => null);
//   };
// }

