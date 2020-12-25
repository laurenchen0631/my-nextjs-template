import {useMemo} from 'react';
import {createStore, applyMiddleware, Store, PreloadedState} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import {rootReducer, RootActions, RootState, PreState} from './helper';

let store: Store<RootState, RootActions> | undefined;

function initStore(initialState: PreState) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware)),
  );
}

export const initializeStore = (preloadedState: PreState): Store<RootState, RootActions> => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') {
    return _store;
  }
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState: PreState): Store<RootState, RootActions> {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
