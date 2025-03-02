import { useContext } from "react";
import { myContext } from "./ColorComtext";

const Cybrom = () =>{

    const {color , setColor} = useContext(myContext)

    return(
        <>
         <h1>Cybrom : {color}</h1>
         <button onClick={()=>{setColor("Green")}}></button>
        </>
    )
}

export default Cybrom;