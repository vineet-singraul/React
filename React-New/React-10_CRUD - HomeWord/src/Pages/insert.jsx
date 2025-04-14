import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Insert = () => {

    const [input , Setinput] = useState("")

    const handleInput = (e) => {
       let name = e.target.name;
       let value = e.target.value;
       Setinput((values)=>({...values , [name]:value}))
    }

    const handleInsert = async () => {
        let api = "http://localhost:3000/Emp";
        let res = await axios.post(api , input)
        alert("Data Insert Succesfully !!! ")
    }


    return (
        <>
            <center>
                <h1>Thise Is Insert section</h1>

                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Emp No</Form.Label>
                        <Form.Control type="text" onChange={handleInput} name='empno' placeholder="Enter employee Number" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Emp Name</Form.Label>
                        <Form.Control type="text" onChange={handleInput} name='empname' placeholder="Enter employee Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Emp City</Form.Label>
                        <Form.Control type="text" onChange={handleInput} name='empcity' placeholder="Enter employee City" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Emp Desigantion</Form.Label>
                        <Form.Control type="text" onChange={handleInput} name='empdegignation' placeholder="Enter employee Desigantion" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Emp Salary</Form.Label>
                        <Form.Control type="text" onChange={handleInput} name='empsalary' placeholder="Enter employee Salary" />
                    </Form.Group>


                    <Button variant="primary" type="submit" onClick={handleInsert}>
                        Submit
                    </Button>
                </Form>
            </center>
        </>
    )
}

export default Insert
