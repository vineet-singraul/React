import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
const Search = () => {

    const [searcha , Setsearcha] = useState("")
    const [input , Setinput] = useState([])
    
    const handleSubmit = async () => {
        let api = `http://localhost:3000/Employye/?name=${searcha}`
        let res = await axios.get(api)  
        Setinput(res.data)             
        alert("Find")
    }

    const ANS = input.map((key)=>{
        return(
            <tr>
            <td>{key.name}</td>
            <td>{key.city}</td>
            <td>{key.designation}</td>
            <td>{key.salary}</td>
        </tr>
        )
    })



    return (
      <>
        <center>
            <h1>Thise Is Search Page</h1>

            <input type="search" placeholder="Search hare .. " onChange={(e)=>{Setsearcha(e.target.value)}}/>
            <Button variant="primary" onClick={handleSubmit}>Primary</Button>

            <Table striped bordered hover>
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
                </Table>
        </center>
      </>
    )
  }
  
  export default Search
  