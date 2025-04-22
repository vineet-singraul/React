import axios from "axios";
import { useEffect, useState } from "react"
import Table from 'react-bootstrap/Table';
const Display = () => {
     const [myData , Setmudata] = useState([])

      const LoadData=async()=>{
        let api = "http://localhost:3000/stu";
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
                <td>{key.roll}</td>
                <td>{key.name}</td>
                <td>{key.course}</td>
                <td>{key.city}</td>
              </tr>
            </>
         )
      })

    return (
      <>
        <center>
          <h1>Display Component </h1>
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>Roll</th>
          <th>Name</th>
          <th>Course</th>
          <th>City</th>
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
  