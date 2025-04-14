import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
const Display = () => {

    const [myData, SetmyData] = useState([])

    const LoadData = async () => {
        let api = "http://localhost:3000/Emp";
        let res = await axios.get(api);
        SetmyData(res.data)
    }

    useEffect(() => {
        LoadData()
    })

    const ANS = myData.map((key) => {
        return (
            <tr>
                <td>{key.empno}</td>
                <td>{key.empname}</td>
                <td>{key.empcity}</td>
                <td>{key.empdegignation}</td>
                <td>{key.empsalary}</td>
            </tr>
        )
    })


    return (
        <>
            <center>
                <h1>Thise Is Display Comp</h1>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Emp Id</th>
                            <th>Emp Name</th>
                            <th>Emp City</th>
                            <th>Emp Degignation</th>
                            <th>Emp Salary</th>
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
