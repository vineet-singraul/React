import axios from "axios"
import { useEffect, useState } from "react";

const App = () => {

  const [sererData, SetserverData] = useState([])
  const [womanData, SetwomanData] = useState([])

  const loadData = async () => {
    let api = "http://localhost:3000/IMAGE";
    let res = await axios.get(api);
    SetserverData(res.data)

    const onlyWoman = res.data.filter(item => item.category === "woman")
    SetwomanData(onlyWoman)
  }

  useEffect(() => {
    loadData()
    // console.log("DATA IA HARE : ",sererData);
    // console.log("Wonam Data Is  : ",womanData);
  }, [])


  const WomanDataFinally = womanData.map((key) => {
    return (
      <>
        <div className="MainDiv">
          <div className="upperDiv">
            <img src={key.img1} alt="" />
          </div>
          <div className="lowerDiv">
            <img src={key.img2} />
            <img src={key.img3} />
            <img src={key.img4} />
          </div>

        </div>
      </>
    )
  })



  return (
    <>
      <center>
        <h1 className="red">Thise Is The App Component :</h1>
         {WomanDataFinally}
      </center>
    </>
  )
}
export default App;








