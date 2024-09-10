import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Providers } from "./providers";
import Navbar from './components/common/Navbar.jsx';
import SideMenu from './components/common/SideMenu.jsx';
import { BrowserRouter } from 'react-router-dom';
import { CampaignProvider } from './context/CampaignContext.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>

      <Providers>
        <CampaignProvider>
          <Navbar />
          <SideMenu />
          <App />
        </CampaignProvider>
      </Providers>
    </BrowserRouter>

  </StrictMode>,
)
