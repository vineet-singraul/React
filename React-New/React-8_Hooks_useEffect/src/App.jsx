// import { useState, useEffect } from "react"

// const App = () => {

//   const [count, Setcount] = useState(0)

//   useEffect(() => {
//     setTimeout(() => {
//       Setcount(count + 1)
//     }, 2000);
//   })

//   return (
//     <>
//       <center><br /><br />
//         <h1 className="red">count : {count}</h1>
//       </center>
//     </>
//   )
// }

// export default App/


















import { useState, useEffect } from "react"


const App =()=>{

  const [count , Setcount ] = useState(0)

  const [multi , Setmulti ] = useState(0)

  useEffect(()=>{
    Setmulti(count*2)
  },[count])


  return(
    <>
      <center>
      <h1 className="red">count : {count}</h1>
      <h1 className="red">Set Multi Count : {multi}</h1><br /><br />
      <button onClick={()=>{Setcount(count+1)}}>Click</button>
      </center>
    </>
  )
}

export default App;