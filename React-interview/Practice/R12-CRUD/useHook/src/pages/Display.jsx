import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import Myedit from './Myedit';
const Display = () => {


    // Display Ke liye
    const  [getinput , setGetinput] = useState([])
    const loadData = async() => {
        let api = "http://localhost:3000/todo"
        let res = await axios.get(api)
        setGetinput(res.data)
        console.log(getinput);
    }
    useEffect(()=>{
        loadData()
        console.log(getinput);      
    },[])


    // Delete ke Liye : 
    const handleDelete = (id) => {
        let api = `http://localhost:3000/todo/${id}`
        let res = axios.delete(api)
        alert("data Deleted")
        loadData()
    }

    // Edie Ke liye hai
    const navigate = useNavigate(); // ✅ initialize navigate

    const handleEdit = (id) => {
        navigate(`/myedit/${id}`);  // ✅ go to edit page with id
    }

    

    let count = 0
    let ANS = getinput.map((key,index)=>{
        count++;
        return(
            <tr>
                <td>{count}</td>
                <td>{key.name}</td>
                <td>{key.task}</td>
                <td style={{cursor:'pointer'}} onClick={()=>{handleDelete(key.id)}}>✖️</td>
                <td style={{cursor:'pointer'}} onClick={() => handleEdit(key.id)}>🖊</td>
            </tr>
        )
    })

    return (
        <>
            <center>
                <h1>Display Component :</h1><br /><br /><br /><hr /><br /><br />


                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Task</th>
                            <th>Delete</th>
                            <th>Edit</th>
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
export default Display;