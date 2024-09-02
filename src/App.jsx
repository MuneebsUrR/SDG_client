
import './index.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import SDG from './pages/sdg'
function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sdg/:id' element={<SDG />} />
      </Routes>

    </>
  )
}

export default App
