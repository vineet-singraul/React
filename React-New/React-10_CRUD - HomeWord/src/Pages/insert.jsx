import { useState } from "react"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Insert = () => {
  const [input, Setinput] = useState({})

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    Setinput((values) => ({ ...values, [name]: value }))
  }

  const handleSubmit = async () => {
    let api = "http://localhost:3000/Employee";
    let response = await axios.post(api, input)
    toast.success("Data inserted successfully!");
    Setinput({});
  }

  return (
    <>
      <h1>This Is the Insert Page</h1>
      <center>
        <div>
          <ToastContainer />
        </div>
        <div className="form-container">
          <div className="form-group">
            <input type="text" placeholder="Your Name" name="Name" onChange={handleInput} />
          </div>

          <div className="form-group">
            <input type="text" placeholder="Designation" name="Designation" onChange={handleInput} />
          </div>

          <div className="form-group">
            <input type="text" placeholder="Your City" name="City" onChange={handleInput} />
          </div>

          <div className="form-group">
            <input type="text" placeholder="Your Salary" name="Salary" onChange={handleInput} />
          </div>

          <button onClick={handleSubmit}>Insert Data</button>
        </div>

      </center>
    </>
  )
}

export default Insert
