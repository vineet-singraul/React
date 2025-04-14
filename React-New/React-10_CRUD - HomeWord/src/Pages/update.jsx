import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import { MdDelete } from "react-icons/md";
const Update = () => {

    const [myData, SetmyData] = useState([])

    const LoadData = async () => {
        let api = "http://localhost:3000/Emp";
        let res = await axios.get(api);
        SetmyData(res.data)
    }

    useEffect(() => {
        LoadData()
    })

    const handleDelete = async (id) => {
        let api = `http://localhost:3000/Emp/${id}`
        let res = await axios.delete(api);
        alert("Data Deleted Succesfully !!")
        LoadData()
    }

    const ANS = myData.map((key) => {
        return (
            <tr>
                <td>{key.empno}</td>
                <td>{key.empname}</td>
                <td>{key.empcity}</td>
                <td>{key.empdegignation}</td>
                <td>{key.empsalary}</td>
                <td><MdDelete onClick={()=>{handleDelete(key.id)}}/></td>
            </tr>
        )
    })


    return (
        <>
            <center>
                <h1>Thise Is Update Comp</h1>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Emp Id</th>
                            <th>Emp Name</th>
                            <th>Emp City</th>
                            <th>Emp Degignation</th>
                            <th>Emp Salary</th>
                            <th>Emp Delete</th>
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
