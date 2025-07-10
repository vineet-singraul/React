import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layoyt from "./Layoyt";
import Insert from "./Pages/Insert";
import Display from "./Pages/Display";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layoyt />}>
          {/* <Route path="insert/id/" element={<Insert />} /> */}
          <Route path="insert/:id" element={<Insert />} />
          <Route path="display/" element={<Display />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
