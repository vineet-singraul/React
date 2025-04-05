import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCatagory from './Pages/ShopCatagory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/mens' element={<ShopCatagory/>}/>
          <Route path='/womens' element={<ShopCatagory/>}/>
          <Route path='/kides' element={<ShopCatagory/>}/>
          <Route path='/electranic' element={<ShopCatagory/>}/>
          <Route path='/grosery' element={<ShopCatagory/>}/>
          <Route path='/product' element={<Product/>}>
             <Route path=':productID' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/loginsigup' element={<LoginSignup/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
