import { useState ,useMemo} from "react"

const App = ()=>{
  const [input , setInput] = useState(5)

  const exoensiveFunctions = (num) => {
      console.log("Inside Expensive Functions :");
      for(var i=0 ; i<1000000000 ; ++i) {}      
      return num*2
  }

  const handleIncement = () => {
      setInput(input+1)
  }

  // const dubleExecution = exoensiveFunctions(2)
  const dubleExecution = useMemo(() => exoensiveFunctions(input), [input])


  return(
    <>
      <center>
        <h1>App Component : </h1>
        <button onClick={(e)=>{handleIncement(e.target.value)}}>Increment</button>
        <br /><br />
        <h1>Counter Ka : {input}</h1>
        <br /><br />
        <h1>Square ka : {dubleExecution}</h1>
      </center>
    </>
  )
}
export default App;