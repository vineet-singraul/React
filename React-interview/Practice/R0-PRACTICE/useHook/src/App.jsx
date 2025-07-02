import { useEffect, useState } from "react";

const App = () => {
  const [input, setInput] = useState(0);

  useEffect(()=>{
    const increment = () => {
      setInput(input + 1);
    };
  })

  return (
    <>
      <center>
        <br /><br />
        <h1>App Component</h1><br />
        <h1>Count : {input}</h1>
        <br /><br />
        <button onClick={increment}>Increment</button>
      </center>
    </>
  );
};

export default App;
