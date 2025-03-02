import axios from "axios";
import { useState , useEffect} from "react";

const Display = () => {


    const [displayinp , setDisplyinp] = useState([]);

    const DataLoad = async () =>{
        let api = "http://localhost:3000/Employee";
        let res = await axios.get(api , setDisplyinp)
        alert("data filled")
        console.log(res.data)
    }

    useEffect(()=>{
        DataLoad();
    },[])

    let show = document.querySelector("#CardsAll")

    show.innerHTML += displayinp.map((key)=>{
        <div id="card">
        <div id="details">
            <strong id="del">Emplyee ID</strong>
            <strong id="ids">{key.id}</strong>
        </div>
        <div id="details">
            <strong id="del">Emplyee Name</strong>
            <strong id="name">{key.Name}</strong>
        </div>
        <div id="details">
            <strong id="del">Emplyee Age</strong>
            <strong id="age"></strong>
        </div>
        <div id="details">
            <strong id="del">Emplyee Email</strong>
            <strong id="email"></strong>
        </div>
        <div id="details">
            <strong id="del">Emplyee City</strong>
            <strong id="city"></strong>
        </div>
        <div id="details">
            <strong id="del">Emplyee Salary</strong>
            <strong id="salary"></strong>
        </div>
        <div id="details">
            <strong id="del">Emplyee Post</strong>
            <strong id="post"></strong>
        </div>
        <div id="details">
            <button>Delete</button>
            <button>Edit</button>
        </div>
    </div>
    })


    return(
        <>
           <hr />
           <h1>Thise Is The Display Page :</h1>
           <center>
             <div id="CardsAll">

             </div>
           </center>
           <hr />
        </>
    )
}

export default Display;