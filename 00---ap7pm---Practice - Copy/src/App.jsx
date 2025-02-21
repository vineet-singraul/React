// import { useState } from "react";
// const App = ()=>{

//     const [name , setName] = useState("")
//     const [city , setCity] = useState("")
//     const [fees , setfees] = useState("")

//     const SubmitForm=()=>{
//         console.log({name:name , city:city  , fees:fees});
        
//     }
//   return(
//     <>
//       <center>
//             <h1>Applcation</h1>

//             Enter Name : <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
//             <br /><br />
//             Enter City : <input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}}/>  
//             <br /><br />
//             Enter Fees : <input type="text" value={fees} onChange={(e)=>{setfees(e.target.value)}}/>  
//             <br /><br />
//             <button onClick={SubmitForm}>Click</button>
//       </center>
//     </>
//   )
// }

// export default App;



















import { useState } from "react";
const App = ()=>{
  
  const [input , setInput] = useState({})

  const handleInput = (e)=>{
     let name = e.target.name;
     let value = e.target.value;

     setInput(values=>({...values, [name]:value}))

    //  console.log(input)
  }

    const SubmitForm=()=>{
      console.log(input)
    }      
  return(
    <>
      <center>
            <h1>Applcation</h1>
            Enter Name : <input type="text" name="name" onChange={handleInput} />
            <br /><br />
            Enter Roll : <input type="text" name="roll" onChange={handleInput} />
            <br /><br />
            Enter City : <input type="text" name="city" onChange={handleInput}/>  
            <br /><br />
            Enter Fees : <input type="text" name="fees" onChange={handleInput}/>  
            <br /><br />
            <button onClick={SubmitForm}>Click</button>
      </center>
    </>
  )
}

export default App;














