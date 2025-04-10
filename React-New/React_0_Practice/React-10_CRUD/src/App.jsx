import axios from "axios"
import { useState } from "react"

const App =() => {

  const [input , Setinput] = useState([])

  const handleInput =(e)=>{
     let name = e.target.name;
     let value = e.target.value;
     Setinput((values)=>({...values , [name]:value}))
  }

  const handleSubmit = async () =>{
    let api = "http://localhost:3000/Student"
    let res = await axios.post(api , input)
    alert("Data Save Succesfully : ")
  }

  return(
    <>
      <center>
        Enter Name : <input type="text" name="name" onChange={handleInput}/><br /><br />
        Enter City : <input type="text" name="City" onChange={handleInput}/><br /><br />
        Enter Number : <input type="text" name="Number" onChange={handleInput}/><br /><br />
        Enter Fees : <input type="text" name="Fees" onChange={handleInput}/><br /><br />
        <button onClick={handleSubmit}></button>
      </center>
    </>
  )
}


export default App