import {HYDRATE} from 'next-redux-wrapper';
import {CombinedState, combineReducers, PreloadedState} from 'redux';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import clock from 'model/clock/ClockReducer';
import counter from 'model/counter/CounterReducer';

import {ClockModel} from './clock/ClockTypes';
import {CounterModel} from './counter/CounterTypes';

type ExtractState<P> = P extends CombinedState<infer T> ? T : never;

export const rootReducer = combineReducers({
  counter,
  clock,
});

export type RootState = ExtractState<ReturnType<typeof rootReducer>>;
export type PreState = PreloadedState<RootState>;
export type RootActions =
  | {
      type: typeof HYDRATE;
      payload: any;
    }
  | CounterModel.ActionTypes
  | ClockModel.ActionTypes;

export type AppThunk<ReturnType> = ThunkAction<ReturnType, RootState, unknown, RootActions>;
export type AppDispatch = ThunkDispatch<RootState, unknown, RootActions>;
