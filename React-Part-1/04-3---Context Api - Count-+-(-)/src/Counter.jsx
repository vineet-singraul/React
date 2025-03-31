import { useContext } from "react";
import { CounterContext } from "./Context";
const Counter = () => {

      const {count , setCount} = useContext(CounterContext)

      const IncrementCount = () =>{
        setCount(count+1)
      }
    
      const DecrementCount = () => {
        if(count>0)
        {
            setCount(count-1)
        }
      }

     return(
        <>
           <center>
            <h1>{count}</h1>
            <button onClick={IncrementCount}>Increment</button>
            <br /><br />
            <button onClick={DecrementCount}>Decrement</button>
           </center>
        </>
     )
}

export default Counter;