import { BrowserRouter ,Routes ,Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./Pages/Home"
import Insert from "./Pages/Insert"
import Display from "./Pages/Display"
import Update from "./Pages/Update"
import Search from "./Pages/Search"
const App = () =>{
  return(
    <>
       <center>
          <BrowserRouter>
            <Routes>
               <Route path="/" element={<Layout/>}>
                 <Route  index element={<Home/>}/>
                 <Route path="home" element={<Home/>}/>
                 <Route path="insert" element={<Insert/>}/>
                 <Route path="display" element={<Display/>}/>
                 <Route path="update" element={<Update/>}/>
                 <Route path="search" element={<Search/>}/>
               </Route>
            </Routes>
          </BrowserRouter>
       </center>
    </>
  )
}

export default App