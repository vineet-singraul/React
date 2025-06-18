import Counter from "./Counter"
import { useContext } from "react"
import CounterContext from "./Context"
const App = () => {
      let useVal = useContext(CounterContext)
  return (
    <>
       <center>
         <h1>App Component :</h1>
          <h1>Count Value : {useVal.input}</h1>
         <Counter/>
       </center>
    </>
  )
}
export default App