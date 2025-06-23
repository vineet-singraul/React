import { useState, useMemo } from "react";

const App = () => {
  const [input, setInput] = useState(0);

  const expensiveFunction = () => {
    let j = 1
    for (var i = 1; i < 1000000000; ++i) {}
    console.log("Expensive function called");
    return j = i + j
  };

  const handleIncrement = () => {
    setInput(input + 1);
  };

  // Wrap the function in an arrow function so it doesn't run immediately
  const duble = useMemo(() => expensiveFunction(), []);
  // const duble = expensiveFunction()


  return (
    <>
      <center>
        <h1>App Component :</h1><br /><br /><hr />
        <h1>Count Is : {input}</h1>
        <h1>Expensive Result : {duble}</h1>
        <button onClick={handleIncrement}>Increment</button>
      </center>
    </>
  );
};

export default App;
