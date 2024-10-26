import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import Button from 'react-bootstrap/Button';
import App from './App.jsx'

{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
