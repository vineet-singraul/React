import { useNavigate } from "react-router-dom";
import datam from "../db.json";

const Display = () => {
    const navigate = useNavigate(); // ✅ call useNavigate here

    const handleClick = (id) => {
        navigate(`/insert/${id}`);  // ✅ navigate to insert/:id
    };

    const ANS = datam.data.map((key, index) => {
        return (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{key.name}</td>
                <td>{key.city}</td>
                <td>
                    <button onClick={() => handleClick(key.id)}>Edit</button>
                </td>
            </tr>
        );
    });

    return (
        <center>
            <br /><h1>Display Component :</h1><br />
            <table border="2" cellPadding="10">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {ANS}
                </tbody>
            </table>
        </center>
    );
};

export default Display;
