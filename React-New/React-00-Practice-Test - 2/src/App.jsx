// import axios from "axios"
// import { useEffect, useState } from "react"
// import { addtoCard } from "./cartSlice"
// import { useDispatch, useSelector } from "react-redux"
// const App = () => {

//   const dispatch = useDispatch()

//   const product = useSelector(item => item.mycart.cart)

//   const productLength = product.length

//   console.log("vvvvvvvvvvvvvvvvv ",productLength);
  

//   const [serverData, SetserverData] = useState([])

//   const loadData = async () => {
//     let api = "http://localhost:3000/IMAGE"
//     let res = await axios.get(api)
//     SetserverData(res.data)
//   }

//   useEffect(() => {
//     loadData()
//     // console.log("Print Data  : ",serverData);

//   }, [])

    

//   const ans = serverData.map((key) => {
//     return (
//       <>
//         <div className="MainDiv">
//           <div className="upperDiv">
//             <img src={key.img1} alt="" />
//           </div>
//           <div className="lowerDiv">
//             <img src={key.img2} />
//             <img src={key.img3} />
//             <img src={key.img4} />
//             <button onClick={() => {
//               dispatch(addtoCard({ ID: key.id, IMG1: key.img1, IMG2: key.img2, IMG3: key.img3, IMG4: key.img4 }))
//             }}>Add To Cart</button>
//           </div>

//         </div>
//       </>   
//     )
//   })

//   return (
//     <>
//       <center>
//         <h1 className="red">App Component</h1><br /><br /><br />
//         <h1 className="red">Cart Item : {productLength}</h1><br /><br /><br />


//         <div id="Main_DIV"> {ans} </div>
//       </center>
//     </>
//   )
// }

// export default App



import axios from "axios"
import { useEffect, useState } from "react"
import { addtoCard } from "./cartSlice"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const App = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const product = useSelector(item => item.mycart.cart)
  const productLength = product.length

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
        <div className="MainDiv" key={key.id}>
          <div className="upperDiv">
            <img src={key.img1} alt="" />
          </div>
          <div className="lowerDiv">
            <img src={key.img2} alt="" />
            <img src={key.img3} alt="" />
            <img src={key.img4} alt="" />
            <button onClick={() => {
              dispatch(addtoCard({
                ID: key.id,
                IMG1: key.img1,
                IMG2: key.img2,
                IMG3: key.img3,
                IMG4: key.img4
              }))
            }}>Add To Cart</button>
          </div>
        </div>
      </>
    )
  })

  return (
    <>
      <center>
        <h1 className="red">App Component</h1>
        <h1 className="red">Cart Item : {productLength}</h1>
        <button onClick={() => navigate("/cart")}>Go to Cart</button>
        <br /><br /><br />
        <div id="Main_DIV"> {ans} </div>
      </center>
    </>
  )
}

export default App