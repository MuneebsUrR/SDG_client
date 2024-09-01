import React from 'react'
import SDGTitle from '../components/common/SDGTitle'
import goallogo from '../assets/goal-logo.png'
import campaign from '../assets/icon-campaigns-fill.png'
import pledge from '../assets/icon-pledge-fill-blue.png'
import quiz from '../assets/icon-quiz-color.png'
import reading from '../assets/icon-reading-color.png'
import target from '../assets/icon-target-red.png'
import plastic from '../assets/plastic-recycle-icon.png'
import upload from '../assets/icon-upload-fill-green.png'
export default function AboutSustainableGoals() {
    return (
        <div className='p-10'>
            <div className='flex items-center justify-center'>

                <SDGTitle text="What are Sustainable Development Goals?" />
            </div>
            <p className='text-center mt-5 font-bold text-xl max-w-6xl mx-auto'>Sustainable Development Goals (SDGs) are a collection of 17 interlinked global goals which provide “a shared blueprint for peace and prosperity for people and the planet, now and into the future”.</p>

            <div className='mt-10 gap-10 flex-col md:flex-row flex items-center max-w-4xl mx-auto'>
                <img src={goallogo} alt="" />
                <p className='font-semibold text-lg text-center'>The SDG framework was adopted by the United Nations in September 2015 which represents a universal call for action to protect the planet, end poverty and ensure that all people enjoy peace and prosperity by 2030.</p>
            </div>
            <div className='flex flex-wrap mt-10 items-center justify-around text-center'>
                <div>
                    <div className='flex items-center justify-center'>

                        <img width={40} height={40} src={target} alt="" />
                    </div>
                    <p style={{ color: '#23036E' }} className='font-bold text-4xl'>169</p>
                    <p className='font-bold text-lg' >Targets</p>
                </div>
                <div>
                    <div className='flex items-center justify-center'>

                        <img width={40} height={40} src={campaign} alt="" />
                    </div>
                    <p style={{ color: '#23036E' }} className='font-bold text-4xl'>25</p>
                    <p className='font-bold text-lg' >Campaigns</p>
                </div>
                <div>
                    <div className='flex items-center justify-center'>

                        <img width={40} height={40} src={pledge} alt="" />
                    </div>
                    <p style={{ color: '#23036E' }} className='font-bold text-4xl'>23918</p>
                    <p className='font-bold text-lg' >Pledges</p>
                </div>
                <div>
                    <div className='flex items-center justify-center'>

                        <img width={40} height={40} src={upload} alt="" />
                    </div>
                    <p style={{ color: '#23036E' }} className='font-bold text-4xl'>25393</p>
                    <p className='font-bold text-lg' >Actions Taken </p>
                </div>
                <div>
                    <div className='flex items-center justify-center'>

                        <img width={40} height={40} src={campaign} alt="" />
                    </div>
                    <p style={{ color: '#23036E' }} className='font-bold text-4xl'>71</p>
                    <p className='font-bold text-lg' >Reading Material</p>
                </div>
                <div>
                    <div className='flex items-center justify-center'>

                        <img width={40} height={40} src={quiz} alt="" />
                    </div>
                    <p style={{ color: '#23036E' }} className='font-bold text-4xl'>30</p>
                    <p className='font-bold text-lg' >Quiz</p>
                </div>
                <div>
                    <div className='flex items-center justify-center'>

                        <img width={40} height={40} src={plastic} alt="" />
                    </div>
                    <p style={{ color: '#23036E' }} className='font-bold text-4xl'>27842 kgs
                    </p>
                    <p className='font-bold text-lg' > Plastic Recycled</p>
                </div>


            </div>
        </div>
    )
}
