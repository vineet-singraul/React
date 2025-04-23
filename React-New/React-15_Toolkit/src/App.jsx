import React, { useReducer } from 'react';

const App = () => {

  const myreducer = (state, action) => {
    switch(action.type) {
      case 'red':
        return 'red';
      case 'green':
        return 'green';
      case 'blue':
        return 'blue';
      default:
        return state;
    }
  }

  const [color , dispatch] = useReducer(myreducer , 'yellow');

  return (
    <>
      <button onClick={() => dispatch({ type: 'red' })}>Red</button>
      <button onClick={() => dispatch({ type: 'green' })}>Green</button>
      <button onClick={() => dispatch({ type: 'blue' })}>Blue</button>

      <div style={{ width: "400px", height: "400px", background: color }}></div>
    </>
  );
}

export default App;
