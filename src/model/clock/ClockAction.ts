import {AppThunk} from 'model/helper';

import {ClockActions} from './ClockTypes';

export const tick = (): AppThunk<void> => async (dispatch) => {
  dispatch({
    type: ClockActions.TICK,
    payload: {
      ts: Date.now(),
      light: true,
    },
  });
};
