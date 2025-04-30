import { useSelector , useDispatch } from "react-redux";
import {setColorButton , setEnterColor} from './colorSlice'
import { useState } from "react";
const App = () => {

  const [getColor , setGetColor] = useState("")
  const colo = useSelector((state) => state.color.color);
  const dispatch = useDispatch()
  
  const changeBlack = () => {
    dispatch(setColorButton())
  }

  const ColorSet = () => {
    dispatch(setEnterColor(getColor))
  }

  return(
    <>
      <center>
          <h1>This Is The App Component</h1><br /><br /><hr /><br />

          <div id="Div" style={{ backgroundColor: colo }}></div><br /><br />

          <button onClick={changeBlack}>Black</button> <br /> <br />

          <input type="text" placeholder="Enter color" onChange={(e)=>setGetColor(e.target.value)} value={getColor}/>
          <button onClick={ColorSet}>Set Change Color</button>
      </center>
    </>
  )
}

export default App;