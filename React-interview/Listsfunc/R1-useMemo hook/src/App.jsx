import { useState, useMemo } from "react";

const App = () => {
  const [input, setInput] = useState(0);

  // Expensive calculation (pure) – just for example
  const expensiveCalculation = (num) => {
    for (let i = 0; i < 1000000000; ++i) {}
    console.log("Inside the expensive calculation");
    return num * 2;
  };

  const doubleValue = useMemo(() => expensiveCalculation(input), [input]);

  const handleIncrement = () => {
    setInput(prev => prev + 1);
  };

  return (
    <>
      <center>
        <h1>This Is App Component:</h1>
        <p>Input: {input}</p>
        <p>Double (Memoized): {doubleValue}</p>
        <button onClick={handleIncrement}>Increment</button>
      </center>
    </>
  );
};

export default App;
