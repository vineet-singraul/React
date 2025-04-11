import { useState } from "react"
import axios from "axios"
const Insert = () => {
 
  const [input , Setinput] = useState({})
   
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    Setinput((values)=>({...values , [name]:value}))
  }

  const handleSubmit = async () => {
    let api = "http://localhost:3000/Employee";
    let response = await axios.post(api , input)
    Setinput()
  }

    return (
      <>
         <h1>Thise Is the Insert Page</h1>

         <center>
           Enter Your Name : <input type="text" placeholder="Your Name : " name="Name" onChange={handleInput}/><br /><br />
           Enter Your Designation : <input type="text" placeholder="Designation : " name="Designation" onChange={handleInput}/><br /><br />
           Enter Your City : <input type="text" placeholder="Your City : " name="City" onChange={handleInput}/><br /><br />
           Enter Your Salary : <input type="text" placeholder="Your Salary : " name="Salary" onChange={handleInput}/><br /><br />
           <button onClick={handleSubmit}>Insert Data</button>
         </center>
      </>
    )
  }
  
  export default Insert
  