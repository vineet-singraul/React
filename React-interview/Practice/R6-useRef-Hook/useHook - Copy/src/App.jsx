import { useEffect,useRef,useState } from "react"
const App = () => {
  let val = useRef(0)
  const [input , setInput] = useState(0)
  const increments = () => {
     setInput(input+1)
     val.current = val.current + 1
     console.log('val',val);
  }

  useEffect(() => {
    console.log("Ek Cal Gaya");
  })
  
  return (
    <center>
      <h1>App Component </h1>
      <br /><br />
      <h1>useState ka Count : {input}</h1><br /><br />
      <h1>useRef ka Count : {val.current}</h1><br /><br />
      <button onClick={increments}>Increment</button>
    </center>
  )
}

export default App
