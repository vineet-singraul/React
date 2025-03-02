import axios from "axios";
import { useState } from "react";
const Insert = () => {

const [input , setInput] = useState({});

const handleInput=(e)=>{
    let name  = e.target.name;
    let value = e.target.value;

    setInput(values => ({...values, [name]:value}));
    console.log(input);
}

const handleSubmit = () =>{
    let api = "http://localhost:3000/student";
    axios.post(api , input).then((res)=>{
          alert("data sublit")
          console.log(input);

    })
}


    return (
        <>
            <center>
                Enter Your Name : <input type="text" name="Name" onChange={handleInput} />
                <br /> <br />

                Enter Your Age : <input type="text"  name="age" onChange={handleInput} />
                <br /> <br />

                Enter Your Salary : <input type="text"  name="salary" onChange={handleInput} />
                <br /> <br />

                Enter Your city : <input type="text"  name="city" onChange={handleInput} />
                <br /> <br />

                <button onClick={handleSubmit}>Submit</button>
            </center>
        </>
    )
}

export default Insert;