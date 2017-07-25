import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import client from '../config/apolloClient';

import ItemsReducer from './items';
import ProfilesReducer from './profiles';
import AuthReducer from './auth';

export const reducer = combineReducers({
  auth: AuthReducer,
  items: ItemsReducer,
  profiles: ProfilesReducer,
  router: routerReducer,
  apollo: client.reducer()
});

export default reducer;
