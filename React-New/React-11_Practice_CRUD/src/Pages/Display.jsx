import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
const Display = () => {

    const [myData, SetmyData] = useState([])

    const LoadData = async () => {
        let api = "http://localhost:3000/Employye";
        let responce = await axios.get(api);
        SetmyData(responce.data)
    }

    useEffect(() => {
        LoadData()
    })

    let ANS = myData.map((key) => {
        return (
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
                <h1>Thise Is Display Page</h1>


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

export default Display
