import { useState } from "react"
const CounterCode = () => {
    const [count , Setcount] = useState(0)

    const Increment = () => {
        Setcount(count+15)
    }

    const Decrement = () => {
        Setcount(count-15)
    }
  return (
    <>
       <center>
        <h1>Counter App</h1>
        <h2>Count : {count} </h2>
        <button onClick={Increment} style={{ margin: '10px', padding: '10px 20px' }}>+15</button>
        <button onClick={Decrement} style={{ margin: '10px', padding: '10px 20px' }}>-15</button>

       </center>
    </>
  )
}

export default CounterCode
