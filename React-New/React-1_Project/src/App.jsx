import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Shop from './Pages/Shop'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import Mans from './Pages/Mans'
import Woman from './Pages/Woman'
import Kides from './Pages/Kides'
import Electranic from './Pages/Electranic'
import Grousary from './Pages/Grousary'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/mens' element={<Mans/>}/>
          <Route path='/womens' element={<Woman/>}/>
          <Route path='/kides' element={<Kides/>}/>
          <Route path='/electranic' element={<Electranic/>}/>
          <Route path='/grosery' element={<Grousary/>}/>
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
