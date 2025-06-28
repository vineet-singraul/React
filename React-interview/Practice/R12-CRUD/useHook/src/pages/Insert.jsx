import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



const Insert = () => {

    const [input , setInput] = useState({})
    const hadleInput = (e) => {
        e.preventDefault(); 
        let name = e.target.name;
        let value = e.target.value;
        setInput(values => ({ ...values, [name]: value }));
    };




    const handleSubmit = (e) => {
        e.preventDefault();
        let api = 'http://localhost:3000/todo';
        axios.post(api, input)
        alert("Data Inserted")
    }

    return (
        <center>
            <Form  style={{width:400}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name </Form.Label>
                    <Form.Control type="text" placeholder="Enter name" onChange={hadleInput} name='name'/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Task </Form.Label>
                    <Form.Control type="text" placeholder="Enter task" onChange={hadleInput} name='task'/>
                </Form.Group>

                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
        </center>
    )
}
export default Insert;