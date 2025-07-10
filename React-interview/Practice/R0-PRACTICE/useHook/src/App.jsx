import { useContext, useRef, useState } from "react";
import { CounterContext } from "./Context";
import Counter from "./Counter";
const App = () => {
  const useVal = useContext(CounterContext)
  const [incre,setIncre] = useState(1)
  let val = useRef(0)
  const handlePlush = () => {
    setIncre(incre+1)
    // console.log(val)
    val.current = val.current + 1
    console.log(val.current)
  }
  return (
    <center>
      <br /><h1>App Component</h1><br />
      <h1>Couont Is : {useVal.values}</h1>
      <Counter/>
      <hr /><br />
      <h1>Count Is {incre}</h1>
      <h1>Count using Ref Is {val.current}</h1>
      <button onClick={handlePlush}>+</button>
    </center>
  );
}

export default App;
