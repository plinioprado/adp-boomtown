import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import client from '../config/apolloClient';

import ItemsReducer from '../redux/items';
import AuthReducer from '../redux/auth';

export const reducer = combineReducers({
  auth: AuthReducer,
  items: ItemsReducer,
  router: routerReducer,
  apollo: client.reducer()
});

export default reducer;
