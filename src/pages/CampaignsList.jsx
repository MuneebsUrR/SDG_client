import React, { useContext } from 'react'
import banner from '../assets/campaign-banner.jpg'
import campaignIcon from '../assets/icon-campaigns-fill.png'
import { PledgeCard } from '../components/common/Carousal';
import CampaignContext from '../context/CampaignContext';


export default function CampaignsList() {
  const {campaigns} = useContext(CampaignContext);
  return (
    <div>
      <div className=' h-[45vh] md:h-[70vh]' style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'end'
      }}>
        <p className='mb-10 font-bold text-white text-2xl md:text-5xl'>SDG Tip for Daily Life</p>
      </div>
      <p className='text-sm p-2'>Home <span className='text-slate-500'> / SDG Campaigns</span></p>
      <div className='flex justify-center items-center mt-5'>
        <img src={campaignIcon} height={70} width={70} alt="" />
      </div>
      <div>
        <p className='text-center font-semibold max-w-6xl mx-auto text-lg py-5'>Sustainability is not about one person adopting a perfectly sustainable lifestyle. Sustainability is about each person across the planet taking one small step every day to adopt sustainability as a way of life. These 'SDG Tips for Daily Life' are simple suggestions that can help us live sustainabily.</p>
        <hr className='m-4 text-slate-500' />
      </div>
      <div className='flex flex-wrap items-center justify-center gap-4 p-5'>
        {campaigns && campaigns.map((pledge, index) => (
          <PledgeCard key={index} pledge={pledge} />
        ))}
      </div>
    </div>
  )
}
