import {RootState} from 'model/helper';

export const getClockState = (state: RootState) => state.clock;

export const getCurrentTime = (state: RootState): number => getClockState(state).lastUpdate;
export const isLight = (state: RootState): boolean => getClockState(state).light;
