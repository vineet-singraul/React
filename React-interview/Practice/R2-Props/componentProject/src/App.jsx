import Bhopal from "./Bhopal";
import Cybrom from "./Cybrom";

const App = () => {
  const Name = {
    "Name":"Vineet",
    "Age":21
  }

  const Greet = () => {
    // alert("Hello from App!");
  }

  return(
    <>
      <center>
         <h1>App Component : </h1>
         <Bhopal Name={Name}/>
         <Cybrom Greet = {Greet}/>
      </center>
    </>
  )
}
export default App;