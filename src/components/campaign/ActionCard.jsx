import React from 'react'
import { useParams } from 'react-router-dom'
import GroupsIcon from '@mui/icons-material/Groups';
import BackHandIcon from '@mui/icons-material/BackHand';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import Badge from '../common/Badge';
export default function ActionCard() {
    const { name } = useParams()
    return (
        <div className='p-2'>
            <h1 className='text-center mt-10 font-bold text-2xl'>{name}</h1>
            <div className='p-6 mt-10 mb-5 space-x-4 max-w-md rounded-xl mx-auto bg-gradient-to-r from-yellow-300 via-pink-400 to-pink-300 flex items-center justify-center'>
                <div className='font-bold text-white'>
                    <p className='text-3xl'>247</p>
                    <p className='text-xl'> Pledges</p>

                </div>
                <div>
                    <GroupsIcon sx={{ fontSize: '90px', color: 'white' }} />
                </div>
            </div>
            <div className='flex items-center space-x-1 justify-center max-w-md mx-auto mb-10'>
                <button className="relative text-sm w-full bg-secondary text-white font-bold py-1.5 px-4 rounded-2xl overflow-hidden group">
                    <span className="absolute inset-0 bg-primary w-full h-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                    <span className="relative z-10"> <BackHandIcon fontSize='small' /> PLEDGE NOW</span>
                </button>
                <button className="relative text-sm w-full bg-secondary text-white font-bold py-1.5 px-4 rounded-2xl overflow-hidden group">
                    <span className="absolute inset-0 bg-primary w-full h-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                    <span className="relative z-10"> <FileUploadIcon fontSize='small' /> UPLOAD ACTION</span>
                </button>
            </div>
            <div className='m-2 p-5' style={{ backgroundColor: '#F7F1F7' }}>
                <p className='text-sm'>Did you know: Mangroves are an extremely important ecosystem for humans.

                    They are the only trees that thrive in salty waters and improve water quality by filtering out nutrients and sediments.

                    They are also teeming with life: more than 1,500 plant and animal species depend on mangroves. This includes fish and birds who use the shallow waters beneath mangrove trees as nurseries. Research now indicates that mangroves are also critical for larger mammals, such as monkeys, sloths, tigers, hyenas and African wild dogs.

                    Protecting mangroves and restoring damaged ones also helps combat climate change through carbon sequestration as they are some of the most carbon-rich ecosystems on the planet, storing on average 1,000 tonnes of carbon per hectare in their biomass and underlying soils.</p>
                
                <div className='mt-4'>
                    <p className='text-sm'>Related SDGs</p>
                    <div className='flex'>
                        <Badge number='1' />
                        <Badge number='3' />
                        <Badge number='13' />
                    </div>
                  
                </div>
            </div>
        </div>
    )
}
