import { useEffect, useRef, useState } from "react"

const App = () => {

  const [input , setInput] = useState(0)
  // let val = 1
  let val = useRef(0)
  const handleInput = () => {
    setInput(input+1)
    // val = val + 1
    val.current = val.current + 1
    console.log("The Incemet val : ",val.current);
  }

  useEffect(()=>{
    console.log("Mai agai aa gaya hu");
  })

  return (
    <>
       <center>
        <h1>Count : {input}</h1>
         <button value={input} onClick={handleInput}>Increment</button>
       </center>
    </>
  )
}
export default App