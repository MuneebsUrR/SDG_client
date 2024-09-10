
import './index.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import SDG from './pages/sdg'
import Quote from './pages/quote'
import CampaignsList from './pages/CampaignsList'
import ScrollToTop from '../services/Scrolltotop'
import CampaignDetail from './pages/CampaignDetail'
function App() {


  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sdg/:id' element={<SDG />} />
        <Route path='/quotes' element={<Quote />} />
        <Route path='/sdg-campaigns' element={<CampaignsList />} />
        <Route path='/sdg-campaigns/:name' element={<CampaignDetail />} />
      </Routes>

    </>
  )
}

export default App
