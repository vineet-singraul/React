import { BrowserRouter, Routes , Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./Pages/Home"
import Insert from "./Pages/Insert"
import Display from "./Pages/Display"
import CounterCode from "./Pages/CounterCode"
import ExampleUesEffect from "./Pages/ExampleUesEffect"
import StudentResult from "./Pages/StudentResult"
const App = () => {
  return (
    <>
      <center>
       <BrowserRouter>
         <Routes>
           <Route path="/" element={<Layout/>}>
             <Route  index element={<Home/>}/>
             <Route path="home/" element={<Home/>}/>
             <Route path="insert/" element={<Insert/>}/>
             <Route path="display/" element={<Display/>}/>
             <Route path="counter/" element={<CounterCode/>}/>
             <Route path="useEffectExample/" element={<ExampleUesEffect/>}/>
             <Route path="studentResult/" element={<StudentResult/>}/>
           </Route>
         </Routes>
       </BrowserRouter>
      </center>
    </>
  )
}

export default App
