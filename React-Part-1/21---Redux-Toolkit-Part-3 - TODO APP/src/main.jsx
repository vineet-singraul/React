import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import "./csstyle.css"
import store from './store.jsx';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
