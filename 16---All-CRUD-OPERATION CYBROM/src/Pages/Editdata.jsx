import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Editdata = () => {
    const { id } = useParams();
    const [empData, setEmpData] = useState({});

    const loadData = async () => {
            let api = `http://localhost:3000/Student/${id}`;
            const response = await axios.get(api);
            setEmpData(response.data);
    };

    useEffect(() => {
        loadData();
    }, [id]);

    const handleInput = (e) => {
        let { name, value } = e.target;
        setEmpData((values) => ({ ...values, [name]: value }));
    };

    const handleSubmit = async () => {
            let api = `http://localhost:3000/Student/${id}`;
            await axios.put(api, empData);
            alert("Data updated successfully!");
    };

    return (
        <>
            <h1>Edit Employee Details: {id}</h1>
            Enter Your Name: <input type="text" name="Name" value={empData.Name} onChange={handleInput} />
            <br /><br />
            Enter City Name: <input type="text" name="City" value={empData.City} onChange={handleInput} />
            <br /><br />
            Enter Your Email: <input type="email" name="Email" value={empData.Email} onChange={handleInput} />
            <br /><br />
            Enter Your Number: <input type="number" name="Number" value={empData.Number} onChange={handleInput} />
            <br /><br />
            Enter Roll Number: <input type="text" name="RollNum" value={empData.RollNum} onChange={handleInput} />
            <br /><br />
            Enter Your CGPA: <input type="text" name="CGPA" value={empData.CGPA} onChange={handleInput} />
            <br /><br />
            <center>
                <button onClick={handleSubmit}>Edit Save</button>
            </center>
        </>
    );
};

export default Editdata;
