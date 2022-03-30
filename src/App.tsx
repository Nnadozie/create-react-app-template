import { initialState, reducer, StateContext } from 'GlobalState';
import { useReducer } from 'react';
import Router from 'Router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={{ ...state, dispatch }}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </StateContext.Provider>
  );
}

export default App;
