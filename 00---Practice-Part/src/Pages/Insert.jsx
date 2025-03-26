import axios from "axios";
import { useState } from "react";

const Insert = () => {
    const [inpData, SetInpdata] = useState({});

    const HandleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        SetInpdata((values) => ({ ...values, [name]: value }));

        console.log("Updated Data:", inpData); // Might not log latest data immediately
    };

    const handleSubmit = async () => {
        let api = "http://localhost:3000/Students";

        try {
            let res = await axios.post(api, inpData);
            alert("Yes! Your Data Was Successfully Stored.");
            SetInpdata({}); // Reset form after submission
        } catch (error) {
            console.error("Error inserting data:", error);
            alert("Failed to store data.");
        }
    };

    return (
        <>
            <center>
                <h1>Insert The User Data :</h1>
                <hr />

                <div id="InsertDiv">
                    <div id="details">
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="Name" onChange={HandleInput} value={inpData.Name || ""} />
                    </div>

                    <div id="details">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="Email" onChange={HandleInput} value={inpData.Email || ""} />
                    </div>

                    <div id="details">
                        <label htmlFor="location">Location:</label>
                        <input type="text" name="Location" onChange={HandleInput} value={inpData.Location || ""} />
                    </div>

                    <div id="details">
                        <label htmlFor="number">Number:</label>
                        <input type="text" name="Number" onChange={HandleInput} value={inpData.Number || ""} />
                    </div>

                    <div id="details">
                        <label htmlFor="batch">Batch-Code:</label>
                        <input type="text" name="BatchCode" onChange={HandleInput} value={inpData.BatchCode || ""} />
                    </div>

                    <div id="details">
                        <label htmlFor="time">Timing:</label>
                        <select name="Timing" onChange={HandleInput} value={inpData.Timing || ""}>
                            <option value="">Select Timing</option>
                            <option value="Morning">Morning</option>
                            <option value="Afternoon">Afternoon</option>
                            <option value="Evening">Evening</option>
                        </select>
                    </div>

                    <div id="details">
                        <label htmlFor="course">Course:</label>
                        <input type="text" name="Course" onChange={HandleInput} value={inpData.Course || ""} />
                    </div>

                    <div id="details">
                        <button onClick={handleSubmit}>Insert Data</button>
                    </div>
                </div>
            </center>
        </>
    );
};

export default Insert;
