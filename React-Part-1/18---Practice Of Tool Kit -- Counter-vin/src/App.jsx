import { useSelector , useDispatch} from "react-redux";
import {increment , decrement , setData} from "./counterSlice"
import { useState } from "react";
useState
const App = () => {

    const count = useSelector((state)=> state.counter.value)
    const dispatch = useDispatch();
    const [amount , setAmount] = useState();

    const IncrementCount =() => {
         dispatch(increment())
    }

    const DecrementCount = () => {
          dispatch(decrement())
    }
    const setValue = () => {
          dispatch(setData(amount))
    }


     return(
        <>
          <center>
              <h1>This Is App Component </h1><br /><br />
              <hr />

               <h1> Count Value Is : {count}</h1> <br /> <br /> <hr /><br /><br />

               <div id="Div">

                   <button onClick={IncrementCount}>+</button>
                   <button onClick={DecrementCount}>-</button>
                   <br /><br />

                   <input type="text" placeholder="Enter value to add " onChange={(e)=>{setAmount(e.target.value)}}/>
                    <button onClick={setValue}>Set Value</button>
               </div>
          </center>
        </>
     )
}

export default App;