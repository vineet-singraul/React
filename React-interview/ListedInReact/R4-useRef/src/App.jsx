// import { useEffect, useRef, useState } from "react"

import { useEffect, useState , useRef} from "react";

// const App = () => {

//   const [input , setInput] = useState(0)
//   // let val = 1
//   let val = useRef(0)
//   const handleInput = () => {
//     setInput(input+1)
//     // val = val + 1
//     val.current = val.current + 1
//     console.log("The Incemet val : ",val.current);
//   }

//   useEffect(()=>{
//     console.log("Mai agai aa gaya hu");
//   })

//   return (
//     <>
//        <center>
//         <h1>Count : {input}</h1>
//          <button value={input} onClick={handleInput}>Increment</button>
//        </center>
//     </>
//   )
// }
// export default App





const App = () => {
  const [input , setInput] = useState(0)
  let val = useRef(1)
  const increMent = () => {
    console.log("Hello");
    setInput(input+1)
    val.current = val.current + 1
    console.log("Value IS : ",val.current);
  }
 
  useEffect(()=>{
    console.log("mai cal gaya : ");
  })

  return(
    <>
      <center>
        <h1>Count : {input}</h1>
        <button value={input} onClick={increMent}>Increment</button>
      </center>
    </>
  )
}
export default App;