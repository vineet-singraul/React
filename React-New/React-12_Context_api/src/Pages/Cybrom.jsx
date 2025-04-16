import { useContext } from "react"
import { myContext } from "../App"
const Cybrom = () => {

  const user = useContext(myContext)

  return (
    <>
       <center>
          <h1>Welcome : {user}</h1>
       </center>
    </>
  )
}

export default Cybrom
