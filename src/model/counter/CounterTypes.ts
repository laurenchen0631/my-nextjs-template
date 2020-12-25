export const CounterActions = {
  TICK: 'TICK' as const,
  INCREMENT: 'INCREMENT' as const,
  DECREMENT: 'DECREMENT' as const,
  RESET: 'RESET' as const,
};

export declare namespace CounterModel {
  export interface State {
    counter: number;
  }

  export type IncrementAction = {
    type: typeof CounterActions.INCREMENT;
  };

  export type DecrementAction = {
    type: typeof CounterActions.DECREMENT;
  };

  export type ResetAction = {
    type: typeof CounterActions.RESET;
  };

  export type ActionTypes = IncrementAction | DecrementAction | ResetAction;
}
