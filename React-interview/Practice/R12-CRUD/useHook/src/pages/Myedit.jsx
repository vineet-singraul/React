import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams } from "react-router-dom";

const Myedit = () => {
    const { id } = useParams();

    const [input, setInput] = useState({});

    // 🔁 Load old data to pre-fill the form
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`http://localhost:3000/todo/${id}`);
            setInput(res.data);
        };
        fetchData();
    }, [id]);

    // 📝 Handle input change
    const hadleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInput(values => ({ ...values, [name]: value }));
    };

    // 📤 Submit updated data
    const handleSubmit = async (e) => {
        e.preventDefault();
            const api = `http://localhost:3000/todo/${id}`;
            await axios.put(api, input);
            alert("Data updated");
    };

    return (
        <>
            <center>
                <Form style={{ width: 400 }} onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter name"
                            onChange={hadleInput}
                            name='name'
                            value={input.name || ''}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Task</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter task"
                            onChange={hadleInput}
                            name='task'
                            value={input.task || ''}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Update
                    </Button>
                </Form>
            </center>
        </>
    );
};

export default Myedit;
