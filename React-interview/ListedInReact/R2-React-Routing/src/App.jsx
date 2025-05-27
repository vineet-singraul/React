import { BrowserRouter, Routes ,Route} from "react-router-dom"
import Layout from "./Layout"
import Home from "./Home"
import About from "./About"
import Content from "./Content"

const App = () => {
  return(
    <>
       <BrowserRouter>
         <Routes>
           <Route path="/" element={<Layout/>}>
              <Route path="home" element={<Home/>}/>
              <Route path="about" element={<About/>}/>
              <Route path="content" element={<Content/>}/>
           </Route>
         </Routes>
       </BrowserRouter>
    </>
  )
}

export default App