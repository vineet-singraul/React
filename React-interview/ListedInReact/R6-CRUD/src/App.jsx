import Counter from "./counter";
import { useContext } from "react";
import { CounterContext } from "./Context";

const App = () => {
    const useVal = useContext(CounterContext)
    console.log(useVal.value);
    return (
        <>
           <center>
             <h1>Count : {useVal.value}</h1>
             <Counter/>
           </center>
        </>
    )
}
export default App;