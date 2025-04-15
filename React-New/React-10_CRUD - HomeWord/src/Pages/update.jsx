import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import { MdDelete } from "react-icons/md";
const Update = () => {

    const [myData, Setmydata] = useState([])

    const LoadData = async () => {
        let api = "http://localhost:3000/emp";
        let res = await axios.get(api);
        Setmydata(res.data)
    }

    useEffect(() => {
        LoadData()
    }, [])


    const DeleteData = async (id) => {
       let api = `http://localhost:3000/emp${id}`
       let res = await axios.delete(api)
       alert("Data Deleted")
       LoadData()
    }


    const ANS = myData.map((key) => {
        return (
            <tr>
                <td>{key.empno}</td>
                <td>{key.empname}</td>
                <td>{key.empcity}</td>
                <td>{key.empdesignation}</td>
                <td>{key.empsalary}</td>
                <td><MdDelete onClick={()=>{DeleteData(key.id)}}/></td>
            </tr>
        )
    })

    return (
        <>
            <center>
                <h1>Thise Is Update Component</h1>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Emp NO</th>
                            <th>Emp Name</th>
                            <th>Emp City</th>
                            <th>Emp Designation</th>
                            <th>Emp Salary</th>
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
