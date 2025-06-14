import { useContext } from "react"
import { CounterContext } from "./Context"
const Counter = () => {
    const useVal = useContext(CounterContext)
  return (
    <>
      <button onClick={()=>{useVal.setValue(useVal.valuee+1)}}>Increment</button>
      <button onClick={()=>{useVal.setValue(useVal.valuee-1)}}>Decrement</button>
    </>
  )
}
export default Counter
