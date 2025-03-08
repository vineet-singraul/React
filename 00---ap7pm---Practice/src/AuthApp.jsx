import { useContext } from "react";
import { LoginContext } from "./LoginContext";
useContext
const AuthApp = () => {

  const {user , logOut } = useContext(LoginContext)

  return(
    <>
       <center>
        <hr />
         <h1>Hello This Is Log Out Page : </h1>
         <br /><br />
         <center> 
           <button onClick={()=>{logOut()}}>Logout</button>
         </center>
         <hr />
       </center>
    </>
  )
}

export default AuthApp;