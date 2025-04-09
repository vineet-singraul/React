// import { useSelector } from "react-redux"


// const LandingPage = () => {

//  const prod = useSelector(state=>state.mycart.cart)

//  const ans = prod.map((key)=>{
//   return(
//     <>
//        <div id="main_cart">
//          <img src={key.img1} id="fa" alt="" />
//          <img src={key.img2} id="fa1" alt="" />
//          <img src={key.img3} id="fa2" alt="" />
//          <img src={key.img4} id="fa3" alt="" />
//        </div>
//     </>
//   )
//  })

//   return (
//     <>
//         <div id="LAding">
//            {ans}
//         </div>
//     </>
//   )
// }

// export default LandingPage





import { useSelector } from "react-redux"

const LandingPage = () => {
  const cartItems = useSelector(state => state.mycart.cart)
  
  return (
    <div style={{ color: 'white', padding: '20px' }}>
      <center>
        <h1>Your Cart Items</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
          {cartItems.map((item, index) => (
            <div key={index} style={{ border: '1px solid red', padding: '10px', borderRadius: '10px' }}>
              <img src={item.IMG1} alt="Product" style={{ width: '200px', height: 'auto' }} />
              <p>Product ID: {item.ID}</p>
            </div>
          ))}
        </div>
      </center>
    </div>
  )
}

export default LandingPage