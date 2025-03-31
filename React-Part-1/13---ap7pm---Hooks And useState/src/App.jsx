// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// import { useState } from "react";
// const App = () => {
//   const [color , setData] = useState("red")

//   const SetGreen=()=>{
//     setData("green")
//   }
//   return (
//     <>
//     <center>
//         <h1 style={{color:color}}>The current color is : {color}</h1>
//         <button onClick={SetGreen}>green</button>
//         <button onClick={()=>{setData("orange")}}>orange</button>
//     </center>
//     </>
//   );
// };

// export default App;


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




// import { useState } from "react";

// const App = () =>{

// const [count , setCount] = useState(0);

// const Decrement=()=>{
//   if(count<=0)
//   {
//     alert("You can not Decrese :")
//   }
//   else{
//     setCount(count-1)
//   }
// }
//   return(
//     <>
//       <center>
//         <h1>The Count : {count}</h1>

//         <center>
//           <button onClick={()=>{setCount(count+1)}}>Increment</button> 
//           <button onClick={Decrement}>Decrement</button>
//         </center>
//       </center>
//     </>
//   )
// }

// export default App;




// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




// Input Field Value Show Karna – Ek input field jisme likhne par wahi text
// screen par dikhai de.const


// import { useState } from "react";
// const App = ()=>{
//   const [data , setData] = useState("Vineet");

//   const SetInputData=(e)=>{
//       setData(e.target.value)
//   }


//   return(
//     <>
//       <center>
//         <h1> Uaer  Entered Data : {data}</h1>
//         Enter Your Name : <input type="text" onInput={SetInputData}/>  <br />
//         {/* <button onClick={SetInputData}>Add Input in Head</button> */}
//       </center>
//     </>
//   )
// }

// export default App;





// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
