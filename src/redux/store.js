import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import { AppReducer } from './reducer';

export const store = createStore(
  AppReducer,
  composeWithDevTools(
    applyMiddleware(
      thunk
    )
  )
);

// TOTO: Implement combine Reducers, along
// export default createStore(
//     combineReducers({
//       items: AppReducer
//     }),
//     composeWithDevTools(
//         applyMiddleware(
//             thunk
//         )
//     )
// );
