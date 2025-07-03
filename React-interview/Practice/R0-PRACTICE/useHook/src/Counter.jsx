import { CounterContext } from "./Context"
import { useContext, useState } from "react"
const Counter = () => {
  const useVal = useContext(CounterContext)
  const [myinp , setMyinp] = useState('')
  
  const handleColor = () => {
    useVal.setColor(myinp)
  }
  
  return (
    <>
       <button onClick={()=>{useVal.setValue(useVal.value+1)}}>+</button>
       <button onClick={()=>{useVal.setValue(useVal.value-1)}}>-</button><br />
       <input type="text" onChange={(e)=>{setMyinp(e.target.value)}}/>
       <button onClick={handleColor}>Change Color</button>
    </>
  )
}

export default Counter
