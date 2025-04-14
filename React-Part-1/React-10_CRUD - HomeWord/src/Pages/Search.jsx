import axios from "axios"
import { useState , useEffect } from "react"

const Search = () => {

  const [inp , Setinp] = useState("")
  const [ser , Setser] = useState([])

  const handleSearch = async () => {
    let api = `http://localhost:3000/Employee/?Name=${inp}`;
    let res = await axios.get(api); 
    Setser(res.data);     
  };

  const ANS = ser.map((key)=>{
    return(
      <>
        <tr>
          <td>{key.Name}</td>
          <td>{key.City}</td>
          <td>{key.Designation}</td>
          <td>{key.Salary}</td>
        </tr>
      </>
    )
  })


    return (
      <>

        <center>
        <h1>Thise Is the Search Page</h1>
        <input type="text" id="imp" placeholder="Enter for search" onChange={(e)=>{Setinp(e.target.value)}}/> 
        <button id="ser" onClick={handleSearch}>Search</button>


        <table border="1">
          <thead>
            <tr>
              <th>Name</th>
              <th>City</th>
              <th>Designation</th>
              <th>Salary</th>

            </tr>
          </thead>
          <tbody>
            {ANS}
          </tbody>
        </table>
        </center>
      </>
    )
  }
  
  export default Search
  