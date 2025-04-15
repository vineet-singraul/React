import { createContext, useState } from "react"
import Comp1 from "./Pages/comp1"

const myContext = createContext()
const App = () => {
  const [user , Setuser] = useState("Vineet")
  return (
    <>
    <h1>Welcome {user}</h1>
      <myContext.Provider value={user}>
         <Comp1/>
      </myContext.Provider>
    </>
  )
}

export default App
export {myContext}
