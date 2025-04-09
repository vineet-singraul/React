import axios from "axios";
import { useState } from "react";

useState

const App = () => {
  const [inp, setInp] = useState({});

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInp((values) => ({ ...values, [name]: value }))
    console.log(inp);
  };

  const handleSubmit = async() =>{
    console.log(inp);
    let api = "http://localhost:3000/Student";
    let res = await axios.post(api , inp) 
    alert("Data Succesfull Save : ")
  }

  return (
    <>
      <center>
        Enter Name : <input type="text" name="name" onChange={handleInput} /><br /><br />
        Enter City :  <input type="text" name="city" onChange={handleInput} /><br /><br />
        Enter Numver <input type="text" name="num" onChange={handleInput} /><br /><br />
        Enter Fees  <input type="text" name="fee" onChange={handleInput} /><br /><br />
        <button onClick={handleSubmit}>Save</button>
      </center>
    </>
  );
};


export default App