import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ActionCard from '../components/campaign/ActionCard'

export default function CampaignDetail() {
  const { name } = useParams()
  const [campaignData, setCampaignData] = React.useState(null)
  useEffect(() => {
    //fetching campaign details
    const fetchData = async () => {
      const response = await fetch(`https://sdg-server-nine.vercel.app/campaigns/get-campaign/${name}`)
      const data = await response.json()
      setCampaignData(data)
    }
    fetchData()
  }, [name])

  return (
    <div>
      <div className=' h-[45vh] md:h-[70vh]' style={{
        backgroundImage: `url(https://picsum.photos/200/300)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'end'
      }}>
        <p className='mb-10 font-bold text-white text-2xl md:text-5xl'>{name}</p>
      </div>
      <p className='text-sm p-2'>Home <span className='text-slate-500'> / SDG Campaigns / SDG Campaign Detail</span></p>
      <ActionCard data={campaignData} />
    </div>
  )
}
