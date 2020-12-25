import {AppThunk} from 'model/helper';

import {CounterActions} from './CounterTypes';

export const incrementCount = (): AppThunk<void> => async (dispatch) => {
  dispatch({type: CounterActions.INCREMENT});
};

export const decrementCount = (): AppThunk<void> => async (dispatch) => {
  dispatch({type: CounterActions.DECREMENT});
};

export const resetCount = (): AppThunk<void> => async (dispatch) => {
  dispatch({type: CounterActions.RESET});
};
