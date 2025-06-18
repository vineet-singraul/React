import { useContext } from "react"
import CounterContext from "./Context"
const Counter = () => {
    let useVal = useContext(CounterContext)
    console.log(useVal);
    return (
        <>
            <button onClick={() => { useVal.setInput(useVal.input + 1) }}>Increment</button><br /><br />
            <button onClick={() => { useVal.setInput(useVal.input - 1) }}>Decrement</button><br /><br />
        </>
    )
}
export default Counter