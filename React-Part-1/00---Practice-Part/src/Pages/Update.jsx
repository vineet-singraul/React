import axios from "axios";
import { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
const  Update= () => {

    const [data, setData] = useState([]);

    const loadData = async () => {
        let api = "http://localhost:3000/Students";
        let res = await axios.get(api, data)
        setData(res.data)
    }

    useEffect(() => {
        loadData()
    }, [])



    const DeletData = async(id) => {
        let api = `http://localhost:3000/Students/${id}`
        let res = await axios.delete(api)
        alert("Data Deleted Sucessfully")
        loadData()
    }

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
                    <td onClick={()=>{DeletData(key.id)}}><FaTrash className="bin" /></td>
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
                                <th>Delete</th>
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

export default Update;