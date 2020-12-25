import {CombinedState, combineReducers} from 'redux';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import counter from 'model/counter/CounterReducer';

import {CounterModel} from './counter/CounterTypes';

type ExtractState<P> = P extends CombinedState<infer T> ? T : never;

export const rootReducer = combineReducers({
  counter,
});

export type RootState = ExtractState<ReturnType<typeof rootReducer>>;
export type RootActions = CounterModel.ActionTypes;

export type AppThunk<ReturnType> = ThunkAction<ReturnType, RootState, unknown, RootActions>;
export type AppDispatch = ThunkDispatch<RootState, unknown, RootActions>;
