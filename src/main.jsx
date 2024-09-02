import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Providers } from "./providers";
import Navbar from './components/common/Navbar.jsx';
import SideMenu from './components/common/SideMenu.jsx';
import { BrowserRouter } from 'react-router-dom';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Providers>
        <Navbar />
        <SideMenu />
        <App />
      </Providers>
    </BrowserRouter>
  </StrictMode>,
)
