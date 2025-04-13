import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Insert = () => {

    const [input , Setinput] = useState("")
    const [mydata , Setmydata] = useState([]);
    const handleInput = (e) => {
       let name = e.target.name;
       let value = e.target.value;
       Setinput((values)=>({...values , [name]:value}))
    }

    const handleSubmit = async () => {
        let api = "http://localhost:3000/Employye";
        let res  = await axios.post(api , input)
        Setmydata(res.data)
    }

    return (
        <>
            <center>
                <h1>Thise Is Insert Page</h1>

                <Form style={{width:400}}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Name"  name='name' onChange={handleInput} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="Enter City Name"  name='city' onChange={handleInput} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Designation</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Designation" name='designation' onChange={handleInput}  />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Salary</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Salary " name='salary' onChange={handleInput}  />
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
