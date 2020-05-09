import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import reducer from '../src/reducers/MainReducer';

import { routerMiddleware } from 'react-router-redux'
// import createHistory from 'history/createBrowserHistory';
import {history} from './helpers/history';
import thunkMiddleware from 'redux-thunk';

// export const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const myRouterMiddleware = routerMiddleware(history);

const getMiddleware = () => {
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware(myRouterMiddleware , thunkMiddleware);
  } else {
    // Enable additional logging in non-production environments.
    return applyMiddleware(myRouterMiddleware,thunkMiddleware ,createLogger())
  }
};

export const store = createStore(reducer, composeWithDevTools(getMiddleware()));