import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table'; // ✅ Add this import

const Search = () => {

    const [input, Setinput] = useState("");
    const [myData, SetmyData] = useState([]); // ✅ Initialize as array

    const handleSearch = async (e) => {
        e.preventDefault();
        let api = `http://localhost:3000/Emp/?empno=${input}`;
        let res = await axios.get(api);
        SetmyData(res.data);
    };

    const ANS = myData.map((key, index) => {
        return (
            <tr key={index}>
                <td>{key.empno}</td>
                <td>{key.empname}</td>
                <td>{key.empcity}</td>
                <td>{key.empdegignation}</td>
                <td>{key.empsalary}</td>
            </tr>
        );
    });

    return (
        <>
            <center>
                <h1>This Is Search Component</h1>
                <Form onSubmit={handleSearch}>
                    <Form.Group className="mb-3" controlId="formSearch" style={{ width: 500 }}>
                        <Form.Control
                            type="search"
                            placeholder="Enter Emp No"
                            onChange={(e) => Setinput(e.target.value)}
                        />
                    </Form.Group>
                    <Button type="submit">
                        Submit
                    </Button>
                </Form>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Emp Id</th>
                            <th>Emp Name</th>
                            <th>Emp City</th>
                            <th>Emp Designation</th>
                            <th>Emp Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ANS}
                    </tbody>
                </Table>
            </center>
        </>
    );
};

export default Search;
