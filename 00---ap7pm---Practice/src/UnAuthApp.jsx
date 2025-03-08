import { useState , useContext } from "react";
import { LoginContext } from "./LoginContext";
const UnAuthApp = () => {
 
   const [user , setUser] = useState();
   const {login} = useContext(LoginContext)

  return(
    <>
     <center>
        Enter Your Name : <input type="text" onChange={(e)=>{setUser(e.target.value)}} />
        <button onClick={()=>{login(user)}}>Login</button>
     </center>
    </>
  )
}

export default UnAuthApp;