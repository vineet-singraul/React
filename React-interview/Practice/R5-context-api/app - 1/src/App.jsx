import { useContext } from "react"
import { CounterContext } from "./Context"
import Counter from "./Counter"
const App = () => {
  const useVal = useContext(CounterContext)
  return(
    <>
      <center>
         <h1>App Component </h1>
         <br /><br /><hr /><br />
         <h1>Count is : {useVal.input}</h1>
         <Counter/>
      </center>
    </>
  )
}
export default App;