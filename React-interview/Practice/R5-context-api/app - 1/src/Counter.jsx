import { useContext } from "react"
import { CounterContext } from "./Context"
const Counter = () => {
   const useVal = useContext(CounterContext)
  return (
    <>
       <button onClick={()=>useVal.setInput(useVal.input+1)}>Increment</button>
       <button onClick={()=>useVal.setInput(useVal.input-1)}>Decrement</button>
    </>
  )
}
export default Counter