import Comp1 from "./Comp1";

import { useState } from "react";
const App =()=>{


  const [user , setusetData] = useState("Vineet")

  return(
    <>
      <h1>Hello My App {user}</h1>
      <Comp1 user={user}/>
    </>
  )
}

export default App;