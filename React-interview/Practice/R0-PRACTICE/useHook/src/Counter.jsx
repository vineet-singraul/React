import { useContext , useState} from "react";
import { CounterContext } from "./Context";
const Counter = () => {
    const useVal = useContext(CounterContext)
    const [coloro ,setColoro] = useState('')
    const handlecolor = (e) => {
        setColoro(e.target.value)
        console.log(coloro)
    }
    return(
        <>
          <button onClick={()=>useVal.setValues(useVal.values+1)}>Increment</button>
          <button onClick={()=>useVal.setValues(useVal.values-1)}>Decrement</button>
          <br />
          <div id="div" style={{background:useVal.color}}></div>
          <input type="text" onChange={handlecolor}/>
          <button onClick={()=>useVal.setColor(coloro)}>Set Color</button>
        </>
    )
}
export default Counter;