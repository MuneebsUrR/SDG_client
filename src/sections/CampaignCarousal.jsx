import React from 'react'
import SDGTitle from '../components/common/SDGTitle'
import Carousal from '../components/common/Carousal'
import Button from '../components/common/Button'

export default function CampaignCarousal() {
    return (
        <div className='py-10 mt-16 bg-lightpink dark:bg-black' >
            <div className='flex items-center justify-center'>
                <SDGTitle text='SDG CAMPAIGNS' />
            </div>
            <p className='text-center font-semibold max-w-xl mx-auto mb-5'>Make a pledge to these SDG Campaigns and let's together determine to build a sustainable new world</p>
            
            <Carousal   />
            <div className='flex justify-center mt-10'>
                <Button link={'/sdg-campaigns'} title='EXPLORE ALL SDG CAMPAIGNS' />
            </div>
        </div>
    )
}
