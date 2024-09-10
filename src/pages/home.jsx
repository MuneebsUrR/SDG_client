import React from 'react'
import Hero from '../sections/Hero'
import AboutSustainableGoals from '../sections/AboutSustainableGoals'
import SustainableGoalsPoints from '../sections/SustainableGoalsPoints'
import ExploreQuotes from '../sections/ExploreQuotes'
import CampaignCarousal from '../sections/CampaignCarousal'

export default function Home() {
  return (
    <div>
      <Hero />
      <div className='bg-gray dark:bg-black'>
        <AboutSustainableGoals />
      </div>
      <div>
        <SustainableGoalsPoints />
      </div>
     
      <div>
        <ExploreQuotes />
      </div>
      <div>
        <CampaignCarousal />
      </div>
    </div>
  )
}
