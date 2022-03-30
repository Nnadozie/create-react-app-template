import React from 'react';
import { Action } from './actions';

export interface State {
  list: string[];
  dispatch: React.Dispatch<Action>;
}

export const initialState: State = {
  list: [],
  dispatch: () => null,
};

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};
