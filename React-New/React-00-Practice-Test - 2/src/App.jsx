import axios from "axios"
import { useEffect, useState } from "react"

const App = () => {

  const [serverData, SetserverData] = useState([])

  const loadData = async () => {
    let api = "http://localhost:3000/IMAGE"
    let res = await axios.get(api)
    SetserverData(res.data)
  }

  useEffect(() => {
    loadData()
  }, [])





  const ans = serverData.map((key) => {
    return (
      <>
        <div className="MainDiv">
          <div className="upperDiv">
            <img src={key.img1} alt="" />
          </div>
          <div className="lowerDiv">
            <img src={key.img2}/>
            <img src={key.img3}/>
            <img src={key.img4}/>
            <button onClick={()=>{SetDataID({ID : key.id})}}>Add To Cart</button>
          </div>

        </div>
      </>
    )
  })

  return (
    <>
      <center>
        <h1 className="red">App Component</h1><br /><br /><br />


        <div id="Main_DIV"> {ans} </div>
      </center>
    </>
  )
}

export default App






