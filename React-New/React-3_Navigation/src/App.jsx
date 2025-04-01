import { BrowserRouter , Routes , Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contect from "./Pages/Contect"
const App = () => {
  return (
    <>
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="home" element={<Home/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="contect" element={<Contect/>}/>
            </Route>
         </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
