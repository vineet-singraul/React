import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Context from './Contaxt.jsx';  // ✅ Fixed import

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Context>  
      <App />
    </Context>
  </StrictMode>
);
