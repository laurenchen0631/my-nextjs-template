import {HYDRATE, createWrapper} from 'next-redux-wrapper';
import {useMemo} from 'react';
import {createStore, applyMiddleware, Store, PreloadedState, Middleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

import {rootReducer, RootActions, RootState, PreState} from './helper';

const bindMiddleware = (middleware: Middleware[]) => {
  if (process.env.NODE_ENV !== 'production') {
    const {composeWithDevTools} = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const initStore = () => {
  return createStore(rootReducer, bindMiddleware([thunkMiddleware]));
};

export const wrapper = createWrapper<RootState, RootActions>(initStore);
