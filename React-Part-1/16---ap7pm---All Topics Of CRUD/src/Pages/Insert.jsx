import axios from "axios";
import { useState } from "react";
const Insert = () => {

    const [insrtInput, setInsertInput] = useState({});

    const handleInputData = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        // ye line jo hai ek ek input ke object ko aleg aleg line me show karti hai
        console.log({ [name]: value });
        // ye line user ke dvara inter kiye gaye data ko set ker raha hai    
        setInsertInput(values=>({...values , [name]:value}))
        // ye line user ke dvara diye gaye input ko usi object me add ker rahi 
        console.log(insrtInput);
    }

    const submitData= async ()=>{
        let api = "http://localhost:3000/Employee";
        let res = await axios.post(api , insrtInput);
        alert("Data Filled Succse")
    }



    return (
        <>
            <center>
                <form>
                    <div id="allDiv">
                        <label htmlFor="id">Employee id :</label>
                        <input type="text" name="id" onChange={handleInputData} />
                    </div>
                    <div id="allDiv">
                        <label htmlFor="name">Employee Name :</label>
                        <input type="text" name="name" onChange={handleInputData} />
                    </div>
                    <div id="allDiv">
                        <label htmlFor="age">Employee Age :</label>
                        <input type="text" name="age" onChange={handleInputData} />
                    </div>
                    <div id="allDiv">
                        <label htmlFor="email">Employee Email :</label>
                        <input type="email" name="email" onChange={handleInputData} />
                    </div>

                    <div id="allDiv">
                        <label htmlFor="city">Employee City :</label>
                        <input type="text" name="city" onChange={handleInputData} />
                    </div>

                    <div id="allDiv">
                        <label htmlFor="salary">Employee Salary :</label>
                        <input type="text" name="salary" onChange={handleInputData} />
                    </div>

                    <div id="allDiv">
                        <label htmlFor="post">Employee Post :</label>
                        <input type="text" name="post" onChange={handleInputData} />
                    </div>

                    <button id="Fill" onClick={submitData}>Submit</button>
                </form>
            </center>
        </>
    )
}

export default Insert;