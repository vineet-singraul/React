// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 1. runs on every rander 
// 2. no dependancy


// import { useEffect } from "react";
// import { useState } from "react";
// const App = ()=>{
//     const [count ,setCount] = useState(0)

//     useEffect (()=>{
//         setTimeout(() => {
//             setCount(count+1)
//         }, 3000);
//     })

//   return(
//     <>
//       <center>
//           <h1>hello</h1>
//           <h1>My Count : {count}</h1>
//       </center>
//     </>
//   )
// }

// export default App;


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.  one dependancy but empty array

// import { useEffect } from "react";
// import { useState } from "react";
// const App = ()=>{
//     const [count ,setCount] = useState(0)

//     useEffect (()=>{
//         setTimeout(() => {
//             setCount(count+1)
//         }, 3000);
//     },[])

//   return(
//     <>
//       <center>
//           <h1>hello</h1>
//           <h1>My Count : {count}</h1>
//       </center>
//     </>
//   )
// }

// export default App;





// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++






// import { useEffect } from "react";
// import { useState } from "react";
// const App = ()=>{
//     const [count ,setCount] = useState(0)

//     const [multi , setMulti] = useState(0)

//     useEffect (()=>{
//         setMulti(count*2)
//     },[count])

//   return(
//     <>
//       <center>
//           <h1>hello</h1>
//           <h1>My Count : {count}</h1>
//           <h1>My Count : {multi}</h1>

//           <button onClick={()=>setCount(count+1)}>Click</button>
//       </center>
//     </>
//   )
// }

// export default App;





// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



                    // ++++  React Form Handling ++++ //

// import { useState } from "react";
// const App = ()=>{

//     const [name , setName] = useState("")
//     const [city , setCity] = useState("")

//     const SubmitForm=()=>{
//         console.log({name:name , city:city});
        
//     }
//   return(
//     <>
//       <center>
//             <h1>Applcation</h1>

//             Enter Name : <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
//             <br /><br />
//             Enter City : <input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}}/>    

//             <br /><br />

//             <button onClick={SubmitForm}>Click</button>
//       </center>
//     </>
//   )
// }

// export default App;




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++







import { useState } from "react";
const App = ()=>{

    const [name , setName] = useState("")
    const [city , setCity] = useState("")
    const [number , setNumber] = useState("")
    const [salary , setSalary] = useState("")

    const SubmitForm=()=>{
        console.log({name:name , city:city , empnumber:number , salary:salary});
        
    }
  return(
    <>
      <center>
            <h1>Applcation</h1>

            Enter Name : <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
            <br /><br />
            Enter City : <input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}}/>  
            <br /><br />
            Enter EmNumber : <input type="text" value={number} onChange={(e)=>{setNumber(e.target.value)}}/>  
              
              <br /><br />

            Enter Salary : <input type="text" value={salary} onChange={(e)=>{setSalary(e.target.value)}}/>  

  

            <br /><br />

            <button onClick={SubmitForm}>Click</button>
      </center>
    </>
  )
}

export default App;