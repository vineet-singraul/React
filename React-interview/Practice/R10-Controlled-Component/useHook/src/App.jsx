import { useState } from "react";

const App = () => {
  const [input ,setInput] = useState('')
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput(values=>({...values , [name]:value}))
  }

  const handleSubmit = () => {
    alert("Data")
    console.log(input);
  }

  return(
    <center>
      <h1>App Component : </h1>   
      <br /><br />
     <input type="text" placeholder="Name" className="input-style" name="name" onChange={handleInput} /><br /><br />
     <input type="text" placeholder="City" className="input-style" name="city" onChange={handleInput} /><br /><br />
     <input type="text" placeholder="Number" className="input-style" name="number" onChange={handleInput} /><br /><br />
     <br />
     <button onClick={handleSubmit}>Submit</button>

    </center>
  )
}
export default App;