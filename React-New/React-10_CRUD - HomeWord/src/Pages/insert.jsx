import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const Insert = () => {

    const [input , Setinput] = useState("")

    const handleInput = (e) =>{
        let name = e.target.name;
        let value = e.target.value;
        Setinput((values)=>({...values , [name]:value}))
    }

    const handleSubmit = async() =>{
        let api = "http://localhost:3000/emp";
        let res = await axios.post(api , input)
         alert("Data Save !!!")
    }



    return (
        <>
            <center>
                <h1>Thise Is Insert Component</h1>

                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Emp No</Form.Label>
                        <Form.Control type="text"  name="empno" onChange={handleInput}  placeholder="Enter employee number " />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Emp Name</Form.Label>
                        <Form.Control type="text"  name="empname" onChange={handleInput}  placeholder="Enter employee name " />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Emp City</Form.Label>
                        <Form.Control type="text"  name="empcity" onChange={handleInput}  placeholder="Enter employee city " />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Emp Designation</Form.Label>
                        <Form.Control type="text"  name="empdesignation" onChange={handleInput}  placeholder="Enter employee designation " />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Emp Salary</Form.Label>
                        <Form.Control type="text"  name="empsalary" onChange={handleInput}  placeholder="Enter employee Salary " />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Form>
            </center>
        </>
    )
}

export default Insert
