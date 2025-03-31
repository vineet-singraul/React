import axios from "axios";
import { useState } from "react";
import "./Search.css"; // Import the CSS file

const Search = () => {
    const [EmpName, setEmpName] = useState("");
    const [mydata, setMyData] = useState([]);

    const handleChangeSearch = async () => {
        let api = `http://localhost:3000/Student/?Name=${EmpName}`;
        const res = await axios.get(api);
        setMyData(res.data);
    };

    const ans = mydata.map((key) => {
        return (
            <tr key={key.RollNumber}> 
                <td>{key.Name}</td>
                <td>{key.City}</td>
                <td>{key.Email}</td>
                <td>{key.Number}</td>
                <td>{key.RollNumber}</td>
                <td>{key.CGPA}</td>
            </tr>
        );
    });

    return (
        <div className="search-container">
            <h1>Student Search</h1>
            <div className="search-box">
                <input
                    type="search"
                    placeholder="Enter Name..."
                    value={EmpName}
                    onChange={(e) => setEmpName(e.target.value)}
                />
                <button onClick={handleChangeSearch}>Search</button>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>City</th>
                        <th>Email</th>
                        <th>Number</th>
                        <th>RollNumber</th>
                        <th>CGPA</th>
                    </tr>
                </thead>
                <tbody>{ans}</tbody>
            </table>
        </div>
    );
};

export default Search;
