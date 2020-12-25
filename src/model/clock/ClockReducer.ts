import {HYDRATE} from 'next-redux-wrapper';
import {combineReducers} from 'redux';

import {ClockModel, ClockActions} from 'model/clock/ClockTypes';
import {RootActions} from 'model/helper';

const initState: ClockModel.State = {
  lastUpdate: 0,
  light: false,
};

function lastUpdate(state = initState.lastUpdate, action: RootActions) {
  switch (action.type) {
    case HYDRATE:
      return action.payload.clock.lastUpdate || state;
    case ClockActions.TICK:
      return action.payload.ts;
    default:
      return state;
  }
}

function light(state = initState.light, action: RootActions) {
  switch (action.type) {
    case HYDRATE:
      return false;
    case ClockActions.TICK:
      return action.payload.light;
    default:
      return state;
  }
}

export default combineReducers<ClockModel.State, RootActions>({
  lastUpdate,
  light,
});
