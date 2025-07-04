import { useRef, useState } from "react";

const App = () => {

  const [input, setInput] = useState(6)
  let val = useRef(0)
  const handleIncrement = () => {
     setInput(input + 1)
     val.current = val.current + 1
     console.log(val.current);
  } 
  return(
      <center><br />
         <h1>App Component : </h1><br /><br />
         <h1>Count by State : {input}</h1> 
         <h1>Count by useRef: {val.current}</h1>
         <br /><br />
         <button onClick={handleIncrement}>Increment</button>
      </center>
  )
}
export default App;