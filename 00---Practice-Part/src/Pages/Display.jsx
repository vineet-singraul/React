import axios from "axios";
import { useState, useEffect } from "react";
const Display = () => {

    const [data, setData] = useState([]);

    const loadData = async () => {
        let api = "http://localhost:3000/Students";
        let res = await axios.get(api, data)
        setData(res.data)
    }

    useEffect(() => {
        loadData()
    }, [])



    const ANS = data.map((key) => {
        return (
            <>
                <tr>
                    <td>{key.Name}</td>
                    <td>{key.Email}</td>
                    <td>{key.Location}</td>
                    <td>{key.Number}</td>
                    <td>{key.BatchCode}</td>
                    <td>{key.Course}</td>
                </tr>
            </>
        )
    })

    return (
        <>
            <center>
                <center>
                    <h1>This Is Display Page:</h1>
                    <table border="1">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Location</th>
                                <th>Number</th>
                                <th>BatchCode</th>
                                <th>Course</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ANS}
                        </tbody>
                    </table>
                </center>
            </center>
        </>
    )
}

export default Display;