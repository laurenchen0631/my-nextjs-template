import {createWrapper} from 'next-redux-wrapper';
import {createStore, applyMiddleware, Middleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import {rootReducer, RootActions, RootState} from './helper';

const bindMiddleware = (middleware: Middleware[]) => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const initStore = () => {
  return createStore(rootReducer, bindMiddleware([thunkMiddleware]));
};

export const wrapper = createWrapper<RootState, RootActions>(initStore);
