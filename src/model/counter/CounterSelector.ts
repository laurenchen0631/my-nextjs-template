import {RootState} from 'model/helper';

const getCounterState = (state: RootState) => state.counter;

export const getCounter = (state: RootState): number => getCounterState(state).counter;
