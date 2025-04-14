import { BrowserRouter , Routes , Route } from "react-router-dom";
import Layout from "./Layout";
import Insert from "./Pages/insert";
import Display from "./Pages/display";
import Search from "./Pages/Search";
import Update from "./Pages/update";
import Home from "./Pages/Home";
const App = () =>{
   return(
    <>
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<Layout/>}>
             <Route path="home/" element={<Home/>}/>
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