import { BrowserRouter , Routes , Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Insert from "./Pages/Insert";
import Display from "./Pages/Display";
import Search from "./Pages/Search";
import Update from "./Pages/Update";

const App = () => {
  return(
    <>
      <BrowserRouter>
        
          <Routes>
              <Route path="/" element={<Layout/>}>
                 <Route index element={<Home/>}/>
                 <Route path="home" element={<Home/>}/>
                 <Route path="contact" element={<Contact/>}/>
                 <Route path="search" element={<Search/>}/>
                 <Route path="insert" element={<Insert/>}/>
                 <Route path="display" element={<Display/>}/>
                 <Route path="update" element={<Update/>}/>
              </Route>
          </Routes>

      </BrowserRouter>
    </>
  )
}

export default App;