import React from 'react'
import Hero from '../sections/Hero'
import AboutSustainableGoals from '../sections/AboutSustainableGoals'
import SustainableGoalsPoints from '../sections/SustainableGoalsPoints'

export default function Home() {
  return (
    <div>
      <Hero />
      <div className='bg-gray'>
        <AboutSustainableGoals />
      </div>
      <div>
        <SustainableGoalsPoints />
      </div>
    </div>
  )
}
