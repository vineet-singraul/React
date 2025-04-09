// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import "./style.css"
// import "bootstrap/dist/css/bootstrap.min.css";
// import store from './store.jsx';
// import { Provider } from 'react-redux';
// createRoot(document.getElementById('root')).render(
//     <Provider store={store}>
//         <App />
//     </Provider>

// )




import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./style.css"
import "bootstrap/dist/css/bootstrap.min.css";
import store from './store.jsx';
import { Provider } from 'react-redux';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './LandingPage.jsx';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cart" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  </Provider>
)
