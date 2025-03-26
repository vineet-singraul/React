import axios from "axios";
import { useState , useEffect } from "react";
const Display = () => {

    const [data , setData] = useState({});

    const loadData = async () => {
        let api = "http://localhost:3000/Students";
        let res = await axios.get(api ,data)
        print(res.data)
    }

    useEffect(()=>{
        loadData()
    },[])    

    const ANS = data.map((key)=>{
        return(
            <>
                
            </>
        )
    })

    return(
        <>
           <center>
              <h1>Thise Is Display Page :</h1>
           </center>
        </>
    )
}

export default Display;