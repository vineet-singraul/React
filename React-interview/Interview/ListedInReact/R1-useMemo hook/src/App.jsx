import { useState, useMemo } from "react";

const App = () => {
  const [input, setInput] = useState(0);

  const handleInput = (value) => {
    setInput(Number(value)); 
  };

  const expensiveFunction = (num) => {
    console.log("Hello");
    for (let i = 0; i < 1000000000; ++i) {}
    return num * 2;
  };

  const doubleValue = useMemo(() => {
    return expensiveFunction(input);
  }, [input]);
  
  return (
    <>
      <input
        type="number"
        value={input}
        onChange={(e) => handleInput(e.target.value)}
      />
      <h1>{doubleValue}</h1>
    </>
  );
};

export default App;
