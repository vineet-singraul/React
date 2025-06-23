import Bhopal from "./Bhopal";
import Cybrom from "./Cybrom";

const App = () => {
  let ui = "Bhopal"
   if (ui === "Bhopal") {
     return(
      <center>
        <Bhopal/>
      </center>
     )
   }else{
     return(
      <center>
        <Cybrom/>
      </center>
     )
   }

}


//  +++++++++  TYPE - 2 ++++++++++++++ //

// const App = () => {
//   let ui = "Cybrom"
//   return(
//     <>
//       {(ui === "Bhopal")? <Bhopal/> : <Cybrom/>}
//     </>
//   )
// }


export default App;