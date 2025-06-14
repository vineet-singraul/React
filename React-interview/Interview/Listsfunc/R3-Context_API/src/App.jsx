import { useContext } from "react";
import { CounterContext } from "./Context";
import Counter from "./Counter";
const App = () => {
   const useVal = useContext(CounterContext)
  return(
    <>
      <center>
        <h1>App Component : </h1>
        <Counter/>
        <br /><br />
        <h1>Count Value Is : {useVal.valuee}</h1>
      </center>
    </>
  )
}
export default App;