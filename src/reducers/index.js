import { combineReducers } from 'redux';
import ItemsReducer from './items';
import ProfilesReducer from './profiles';

export const reducer = combineReducers({
  items: ItemsReducer,
  profiles: ProfilesReducer
});

export default reducer;
