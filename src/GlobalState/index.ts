import React from 'react';
import { actions, ACTIONSLIST } from './actions';
import { initialState, reducer } from './reducer';

const StateContext = React.createContext({
  ...initialState,
});

export { reducer, initialState, actions, ACTIONSLIST, StateContext };
