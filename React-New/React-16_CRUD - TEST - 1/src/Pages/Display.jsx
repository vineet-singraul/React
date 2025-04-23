import axios from "axios";
import { useEffect, useState } from "react"
import Table from 'react-bootstrap/Table';
const Display = () => {
     const [myData , Setmudata] = useState([])

      const LoadData=async()=>{
        let api = "http://localhost:3000/Emp";
        let res = await axios.get(api)
        Setmudata(res.data)
      }

      useEffect(()=>{
        LoadData()
      },[])

      let ANS = myData.map((key)=>{
         return(
            <>
              <tr>
                  <td>{key.EmpId}</td>
                  <td>{key.name}</td>
                  <td>{key.designation}</td>
                  <td>{key.Department}</td>
                  <td>{key.salary}</td>
              </tr>
            </>
         )
      })

    return (
      <>
        <center>
          <h1>Display Emp Data</h1>
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>Emp Id</th>
          <th>Emp Name</th>
          <th>Emp designation</th>
          <th>Emp Department</th>
          <th>Emp salary</th>
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
  
  export default Display
  