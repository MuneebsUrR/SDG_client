import { useState } from 'react'

import Navbar from './components/common/Navbar'
import SideMenu from './components/common/SideMenu'
import './index.css'
import Button from '../src/components/common/Button'
import Hero from './sections/Hero'
import AboutSustainableGoals from './sections/AboutSustainableGoals'
import SustainableGoalsPoints from './sections/SustainableGoalsPoints'
function App() {


  return (
    <>
      <div>
        <Navbar />
        <SideMenu />
        <Hero />
      </div>
      <div className='bg-gray'>
        <AboutSustainableGoals />
      </div>
      <div>
        <SustainableGoalsPoints />
      </div>

    </>
  )
}

export default App
