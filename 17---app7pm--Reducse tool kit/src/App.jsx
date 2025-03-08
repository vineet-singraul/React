import { useSelector , useDispatch} from "react-redux";
import {changeColor , setColorAll} from './colorSlice'
import { useState } from "react";
const App = () => {
 
   const colo = useSelector((state) => state.color.color)
   const dispatch = useDispatch()
  
  const [getColor , setGetColor] = useState("")
  
    
   const ChangeColorClick =() => {
       dispatch(changeColor())
   }

   const GocolorSet = () =>{
      dispatch(setColorAll(getColor))
   }

  return(
    <center>
      <h1>Thise Is App Component </h1><br /><br /><hr /><br />

      <div id="Div" style={{ backgroundColor: colo }}></div><br /><br />
      <button onClick={ChangeColorClick}>Change Color</button><br /><br /><br />

      <input type="text" placeholder="Enter Color" value={getColor} onChange={(e)=>{setGetColor(e.target.value)}}/>
      <button onClick={GocolorSet}>setColor</button>
    </center>
  )
}

export default App;