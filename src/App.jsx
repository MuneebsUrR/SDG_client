
import './index.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import SDG from './pages/sdg'
import Quote from './pages/quote'
function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sdg/:id' element={<SDG />} />
        <Route path='/quotes' element={<Quote />} />
      </Routes>

    </>
  )
}

export default App
