import { useState } from 'react'

import Navbar from './components/common/Navbar'
import SideMenu from './components/common/SideMenu'
import './index.css'
import Button from '../src/components/common/Button'
import Hero from './sections/Hero'
function App() {


  return (
    <>
      <div>
        <Navbar />
        <SideMenu />
        <Hero />
      </div>
      <div>

      </div>

    </>
  )
}

export default App
