import { useRef, useState } from "react";

const App = () => {
  var val = useRef(0)
  var cal = 0
  const [input , setInput] = useState(5)
  const handleClick = () => {
    setInput(input+1)
    console.log("Increment :");
     cal = cal + 1
     val.current = val.current + 1   
  }
  return(
    <>
      <center>
        <h1>App Component : </h1>
        <button onClick={(e)=>{handleClick(e.target.value)}}>Increment</button>
        <br /><br />
        <h1>Count : {input}</h1>
        <br /><br />
        <h1>Count Val ka : {val.current}</h1>
      </center>
    </>
  )
}
export default App;