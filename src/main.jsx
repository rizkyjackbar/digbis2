import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ReactGA from 'react-ga4';
import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter
// Inisialisasi Google Analytics dengan Measurement ID yang Anda dapatkan
ReactGA.initialize('G-RLJFHJ312G'); // G-XXXXXXXXXX ganti dengan Measurement ID Anda

ReactGA.send("pageview");

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
