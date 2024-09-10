import React from 'react'
import { useParams } from 'react-router-dom'
import GroupsIcon from '@mui/icons-material/Groups';
import BackHandIcon from '@mui/icons-material/BackHand';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import Badge from '../common/Badge';
import AlertDialogSlide from './AlertDialogSlide';
export default function ActionCard({ data }) {
    const { name } = useParams()
    const [open, setOpen] = React.useState(false);


    const handlePledgeClick = () => {
        //incrementing the pledge count
        try {
            fetch(`https://sdg-server-nine.vercel.app/campaigns/increment-pledge`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ title: data?.title })
                }
            )

            setOpen(true)

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='p-2'>
            <h1 className='text-center mt-10 font-bold text-3xl'>{data?.title}</h1>
            <div className='p-6 mt-10 mb-5 space-x-4 max-w-md rounded-xl mx-auto bg-gradient-to-r from-yellow-300 via-pink-400 to-pink-300 flex items-center justify-center'>
                <div className='font-bold text-white'>
                    <p className='text-3xl'>{data?.pledges}</p>
                    <p className='text-xl'> Pledges</p>

                </div>
                <div>
                    <GroupsIcon sx={{ fontSize: '90px', color: 'white' }} />
                </div>
            </div>
            <div className='flex items-center space-x-1 justify-center max-w-md mx-auto mb-10'>
                <button onClick={handlePledgeClick} className="relative text-sm w-full bg-secondary text-white font-bold py-1.5 px-4 rounded-2xl overflow-hidden group">
                    <span className="absolute inset-0 bg-primary w-full h-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                    <span className="relative z-10"> <BackHandIcon fontSize='small' /> PLEDGE NOW</span>
                </button>
                <button className="relative text-sm w-full bg-secondary text-white font-bold py-1.5 px-4 rounded-2xl overflow-hidden group">
                    <span className="absolute inset-0 bg-primary w-full h-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                    <span className="relative z-10"> <FileUploadIcon fontSize='small' /> UPLOAD ACTION</span>
                </button>
            </div>
            <div className='m-2 dark:text-black' style={{ backgroundColor: '#F7F1F7' }}>
                <p className='text-md p-5'>
                    {data?.description}
                </p>

                <div className='mt-4 p-5'>
                    <p className='text-sm'>Related SDGs</p>
                    <div className='flex'>
                        {
                            data?.sdgs.map((sdg) => (
                                <Badge number={sdg} />
                            ))
                        }
                    </div>

                </div>
            </div>
            <AlertDialogSlide open={open} setOpen={setOpen} />
        </div>
    )
}
