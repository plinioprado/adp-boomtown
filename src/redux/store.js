import { applyMiddleware, createStore } from 'redux';
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
