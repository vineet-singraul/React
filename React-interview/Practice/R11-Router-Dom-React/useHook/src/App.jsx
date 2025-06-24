import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contect from "./pages/Contect";
import Servise from "./pages/Servise";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contect" element={<Contect />} />
          <Route path="servise" element={<Servise />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
