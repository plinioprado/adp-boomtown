import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import client from '../config/apolloClient';

import AuthReducer from './auth';
import FormReducer from './forms';
import ItemsReducer from './items';

export const reducer = combineReducers({
  auth: AuthReducer,
  forms: FormReducer,
  items: ItemsReducer,
  router: routerReducer,
  apollo: client.reducer()
});

export default reducer;
