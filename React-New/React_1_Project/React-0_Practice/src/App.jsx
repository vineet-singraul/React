import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCatagury from './Pages/ShopCatagury'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='mens/' element={<ShopCatagury/>}/>
          <Route path='womens/' element={<ShopCatagury/>}/>
          <Route path='kides/' element={<ShopCatagury/>}/>
          <Route path='electranic/' element={<ShopCatagury/>}/>
          <Route path='grousary/' element={<ShopCatagury/>}/>

          <Route>
            <Route path='/product' element={<Product/>}/>
          </Route>

          <Route path='cart/' element={<Cart/>}/>
          <Route path='loginSignup/' element={<LoginSignup/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
