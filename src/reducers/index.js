import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import ItemsReducer from './items';
import ProfilesReducer from './profiles';

export const reducer = combineReducers({
  items: ItemsReducer,
  profiles: ProfilesReducer,
  router: routerReducer
});

export default reducer;
