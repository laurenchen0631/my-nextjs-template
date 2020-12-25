export const ClockActions = {
  TICK: 'TICK' as const,
};

export declare namespace ClockModel {
  export interface State {
    lastUpdate: number;
    light: boolean;
  }

  export type TickAction = {
    type: typeof ClockActions.TICK;
    payload: {
      ts: number;
      light: boolean;
    };
  };

  export type ActionTypes = TickAction;
}
