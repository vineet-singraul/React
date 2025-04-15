import { useState } from "react"
import Comp1 from "./Pages/comp1"

const App = () => {
  const [user , Setuser] = useState("Vineet")
  return (
    <>
        <Comp1 user={user}/>
    </>
  )
}

export default App
