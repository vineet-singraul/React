import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useState, useEffect } from "react"
import 'react-toastify/dist/ReactToastify.css'; // required

const Update = () => {

  const [myData , SetmyData] = useState([])

  const loadData = async () => {
    let api = "http://localhost:3000/Employee";
    let res = await axios.get(api);
    SetmyData(res.data)
  }

  useEffect(() => {
    loadData()
  }, [])

  const deleteData = async (id) => {
    let api = `http://localhost:3000/Employee/${id}`;
    let res = await axios.delete(api);
    loadData()
    toast.warn("Data Deleted"); // ✅ success toast
  }

  const ANS = myData.map((key)=>{
    return(
      <>
        <tr>
          <td>{key.Name}</td>
          <td>{key.City}</td>
          <td>{key.Designation}</td>
          <td>{key.Salary}</td>
          <td><MdDelete id="del" onClick={()=>{deleteData(key.id)}}/></td>
          <td><FaEdit  id="edit"/></td>
        </tr>
      </>
    )
  })

  return (
    <>
      <ToastContainer/> {/* ✅ only here, once */}
      <center>
        <h1>Thise Is the Update Page</h1>
        <table border="1">
          <thead>
            <tr>
              <th>Name</th>
              <th>City</th>
              <th>Designation</th>
              <th>Salary</th>
              <th>Delete</th>
              <th>Edit</th>
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

export default Update;
