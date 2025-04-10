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




  const setFirst = (da, id) => {
    const updatedData = [...serverData];
    for (let i = 0; i < updatedData.length; i++) {
      if (updatedData[i].id === id) {
        updatedData[i].img1 = da.urls;
      }
    }
    SetserverData(updatedData); 
  };





  const ans = serverData.map((key) => {
    return (
      <>
        <div className="MainDiv">
          <div className="upperDiv">
            <img src={key.img1} alt="" />
          </div>
          <div className="lowerDiv">
            <img src={key.img2} onMouseEnter={() => { setFirst({ urls: key.img2 }, key.id) }} />
            <img src={key.img3} onMouseEnter={() => { setFirst({ urls: key.img3 }, key.id) }} />
            <img src={key.img4} onMouseEnter={() => { setFirst({ urls: key.img4 }, key.id) }} />
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






