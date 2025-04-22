import axios from 'axios';
import {useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Insert = () => {

          const  [input , Setinput] = useState("")
          const handleinput = (e) => {
             let name = e.target.name;
             let value = e.target.value;
             Setinput((values)=>({...values , [name]:value}))
          }

          const handleSubmit = async () =>{
            let api = "http://localhost:3000/stu"
            let res = await axios.post(api , input)
            alert("Data Insertes Sucess : ")
          }

    return (
        <>
            <center>
                <h1>Insert Component </h1>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Roll No </Form.Label>
                        <Form.Control type="text" placeholder="roll no" name='roll' onChange={handleinput}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Name </Form.Label>
                        <Form.Control type="text" placeholder="Student name" name='name' onChange={handleinput} />
                    </Form.Group>
    
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Course</Form.Label>
                        <Form.Control type="text" placeholder="course" name='course' onChange={handleinput} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="City name" name='city' onChange={handleinput} />
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
