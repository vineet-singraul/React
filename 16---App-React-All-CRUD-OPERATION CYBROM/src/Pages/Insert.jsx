import axios from "axios";
import { useState } from "react";
const Insert = () => {

    const [input, setInput] = useState({});

    const handleInputChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        console.log({ [name]: value });
        setInput(values => ({ ...values, [name]: value }))
        console.log(input);
    }

    const handleSubmit = () => {
        let api = "http://localhost:3000/Student";
        axios.post(api, input).then((res) => {
            alert("Save all The Data : ")
        })
    }

    // const handleSubmit = async() =>{
    //     let api = "http://localhost:3000/Student"
    //     let res = await axios.post(api , input)
    //     console.log(res);
    //     alert("Save all The Data : ")
    // }


    return (
        <>
            <center>
                <h1>Hello This is The Insert Page :</h1>
            </center>
            <center>
                <form>
                    Enter Your Name : <input type="text" name="Name" onChange={handleInputChange} />
                    <br /> <br />
                    Enter City Name : <input type="text" name="City" onChange={handleInputChange} />
                    <br /><br />
                    Enter Your Email; : <input type="email" name="Email" onChange={handleInputChange} />
                    <br /> <br />
                    Enter Your Number : <input type="number" name="Number" onChange={handleInputChange} />
                    <br /> <br />
                    Enter Roll Number : <input type="text" name="RoolNum" onChange={handleInputChange} />
                    <br /> <br />
                    Enter Your CGPA : <input type="text" name="CGPA" onChange={handleInputChange} />
                    <br /> <br />

                    <center>
                        <button onClick={handleSubmit}>Submit</button>
                    </center>
                </form>
            </center>
        </>
    )
}


export default Insert;


