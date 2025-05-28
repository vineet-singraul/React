import { useContext } from "react"
import { CounterContext } from "./Contexts"

const Counter = () => {
    const useVal = useContext(CounterContext)
    return(
        <>
          <button onClick={()=>{useVal.setValue(useVal.value+1)}}>Increment</button>
          <button onClick={()=>{useVal.setValue(useVal.value-1)}}>Decrement</button>
        </>
    )
}
export default Counter