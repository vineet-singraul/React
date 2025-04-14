import { BrowserRouter , Routes , Route } from "react-router-dom";
import Layout from "./Layout";
import Homes from "./Pages/Homes";
import Insert from "./Pages/Insert";
import Display from "./Pages/Display";
import Search from "./Pages/Search";
import Update from "./Pages/update";
const App = () =>{
  return(
    <>
       <BrowserRouter>
          <Routes>
             <Route path="/" element={<Layout/>}>
                 <Route path="homes/" element={<Homes/>}/>
                 <Route path="insert/" element={<Insert/>}/>
                 <Route path="display/" element={<Display/>}/>
                 <Route path="search/" element={<Search/>}/>
                 <Route path="update/" element={<Update/>}/>
             </Route>
          </Routes>
       </BrowserRouter>
    </>
  )
}

export default App;