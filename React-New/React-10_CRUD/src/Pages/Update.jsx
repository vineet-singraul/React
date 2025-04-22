import axios from "axios";
import { useEffect, useState } from "react"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
const Update = () => {
     const [myData , Setmudata] = useState([])

      const LoadData=async()=>{
        let api = "http://localhost:3000/stu";
        let res = await axios.get(api)
        Setmudata(res.data)
      }

      useEffect(()=>{
        LoadData()
      },[])

      const handleDelete = async (id) => {
        let api = `http://localhost:3000/stu/${id}`
        let res = await axios.delete(api)
        alert("Data Deleted !!! ")
        LoadData()
      }

      let ANS = myData.map((key)=>{
         return(
            <>
              <tr>
                <td>{key.roll}</td>
                <td>{key.name}</td>
                <td>{key.course}</td>
                <td>{key.city}</td>
                <Button variant="primary" type="submit" onClick={()=>{handleDelete(key.id)}}>
                      Delete
                </Button>
              </tr>
            </>
         )
      })

    return (
      <>
        <center>
          <h1>Update Component </h1>
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>Roll</th>
          <th>Name</th>
          <th>Course</th>
          <th>City</th>
          <th>Delete</th>
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
  
  export default Update
  