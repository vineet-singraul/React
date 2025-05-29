import { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === 'increment') {
    return state + 1;
  }

  if (action.type === 'decrement') {
    return state - 1;
  }

  return state; // Default case
};

const App = () => {
  const [value, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h1>App Component : {value}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </>
  );
};

export default App;
