import React from 'react'
import SDGTitle from '../components/common/SDGTitle'
import Carousal from '../components/common/Carousal'

export default function Campaign() {
    return (
        <div className='py-10 mt-16' style={{ backgroundColor: '#F7F1F7' }}>
            <div className='flex items-center justify-center'>
                <SDGTitle text='SDG CAMPAIGNS' />
            </div>
            <p className='text-center font-semibold max-w-xl mx-auto'>Make a pledge to these SDG Campaigns and let's together determine to build a sustainable new world</p>
            
            <Carousal   />
        </div>
    )
}
