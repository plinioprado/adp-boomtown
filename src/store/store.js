import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'react-router-redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { reducer } from './../reducers';
import { history } from '../index';

const reduxRouter = routerMiddleware(history);

const store = createStore(
  reducer,
  composeWithDevTools(
  applyMiddleware(
    logger,
    thunk,
    reduxRouter
    )
  )
);

export default store;
