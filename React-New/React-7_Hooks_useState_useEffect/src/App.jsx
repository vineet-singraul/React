// import { useState } from "react"

// const App = ()=>{

//   const [name , setName] = useState("Vineet")

//   return(
//     <>
//        <center>
//        <h1 className="red" style={{color : name}}>Color is : {name}</h1>
//        <button onClick={()=>{setName("Mohni")}}>Click</button>
//        <button onClick={()=>{setName("blue")}}>blue</button>
//        <button onClick={()=>{setName("red")}}>red</button>
//        <button onClick={()=>{setName("green")}}>green</button>
//        </center>
//     </>
//   )
// }

// export default App










import { useState } from "react"

const App = ()=>{

  const [count , Setcount] = useState(0)
 
  const dec = ()=>{
    if(count > 0)
    {
      Setcount(count-1)
    }
    else{
      alert("You Can Not Decrement to 0")
    }
  }

  return(
    <>
       <center><br /><br />
          <div className="Container">
          <button onClick={()=>{Setcount(count+1)}}>+</button>
       <h1 className="red">Count : {count}</h1>
       <button onClick={dec}>-</button>
          </div>
       </center>
    </>
  )
}

export default App