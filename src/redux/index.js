
// import { createStore } from 'redux';


// ACTIONS

// const LOGIN = 'LOGIN';
// const LOGOUT = 'LOGOUT';
// const RENDER_ITEMS = 'RENDER_ITEMS';

// export const login = () => ({ type: LOGIN });
// export const logout = () => ({ type: LOGOUT });

// const renderItems = (items) => ({
//   type: RENDER_ITEMS,
//   payload: {
//     itemsData: items,
//     loading: false
//   }
// });

// export function getItems() {
//   return function (dispatch) {
//     Promise.all(['http://localhost:3001/items', 'http://localhost:3001/users'].map(url => (
//       fetch(url).then(response => response.json())
//     ))).then(json => {
//       const [items, users] = json;
//       const itemsWithOwners = items.map(item => {
//         const itemOwner = users.filter(user => user.id === item.itemOwner);
//         item.itemOwner = itemOwner[0];
//         return item;
//       });
//       dispatch(renderItems(itemsWithOwners));
//     });
//   };
// }

// REDUCER

// const initialState = {
//   logged: true,
//   loading: true,
//   itemsData: []
// };

// function appReducer(state = initialState, action) {
//   switch (action.type) {
//     case RENDER_ITEMS:
//       return { ...state, loading: action.payload.loading, itemsData: action.payload.itemsData };
//     case LOGIN:
//       return { ...state, logged: true };
//     case LOGOUT:
//       return initialState;
//     default:
//       return state;
//   }
// }


// STORE

// export const store = createStore(appReducer);
