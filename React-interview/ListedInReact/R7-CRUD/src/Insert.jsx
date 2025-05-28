import axios from "axios"
import { useState } from "react"

const Insert = () => {
    const [inpval, setInpval] = useState('')
    const handlInput = (e) => {
        let value = e.target.value
        let name = e.target.name
        setInpval((values) => ({ ...values, [name]: value }))
    }

    const handleInput = async () => {
        console.log(inpval);
        let api = "http://localhost:3000/Data";

        try {
            await axios.post(api, inpval); // send data here!
            alert("Data Inserted Successfully!");
        } catch (error) {
            console.error("Error inserting data:", error);
            alert("Failed to insert data.");
        }
    };


    return (
        <>
            <center>
                <input type="text" placeholder="Enter Your Name :" name="name" onChange={handlInput} />
                <br /><br />
                <input type="text" placeholder="Enter Your Age :" name="age" onChange={handlInput} />
                <br /><br />
                <button onClick={handleInput}>Submit</button>
            </center>
        </>
    )
}
export default Insert