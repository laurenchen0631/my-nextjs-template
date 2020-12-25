import {combineReducers} from 'redux';

import {RootActions} from 'model/helper';

import {CounterActions, CounterModel} from './CounterTypes';

const initState: CounterModel.State = {
  counter: 0,
};

function counter(state = initState.counter, action: RootActions) {
  switch (action.type) {
    case CounterActions.INCREMENT:
      return state + 1;
    case CounterActions.DECREMENT:
      return state - 1;
    case CounterActions.RESET:
      return initState.counter;
    default:
      return state;
  }
}

export default combineReducers<CounterModel.State>({
  counter,
});
