import { useState , useEffect } from "react"

const App = ()=>{

  useEffect(()=>{
    setTimeout(() => {
       count+1
    }, 2000);
  })

  const [count , Setcount] = useState(0)
 
  return(
    <>
       <center><br /><br />
         <h1>count : {count}</h1>
       </center>
    </>
  )
}

export default App