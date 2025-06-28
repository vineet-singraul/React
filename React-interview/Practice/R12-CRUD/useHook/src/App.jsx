import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Servise from "./pages/Servise";
import Insert from "./pages/Insert";
import Display from "./pages/Display";
import Myedit from "./pages/Myedit";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="insert" element={<Insert/>} />
          <Route path="display" element={<Display/>} />
          <Route path="servise" element={<Servise />} />
          <Route path="myedit/:id" element={<Myedit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
