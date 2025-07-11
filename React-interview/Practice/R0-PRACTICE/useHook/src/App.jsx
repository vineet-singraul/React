import { useState } from "react";

const App = () => {
  const [val, setValue] = useState(4)
  // const expensiveCalculation = ()=> {
  //   let j = 2
  //   for (var i = 0; i < 10000000; i++) { }
  //   return j = i + j
  // }
  const expensiveFunction = () => {
    let j = 1
    for (var i = 1; i < 1000000000; ++i) { }
    console.log("Expensive function called");
    return j = i + j
  };
  const duble = expensiveFunction()
  const handleClick = () => {
    setValue(val + 1)
  }
  return (
    <center>
      <br /><h1>App Component</h1><br />
      <h1>Expensive functions : {duble}</h1>
      <h1>Count Is : {val}</h1>
      <button onClick={handleClick}>Increment</button>
    </center>
  );
}
export default App;