import React from 'react'
import { useParams } from 'react-router-dom'
import Hero from '../components/sdg/Hero'
import Tabs from '../components/sdg/Tabs'

export default function SDG() {
    const { id } = useParams()
    return (
        <div>
            <Hero />
            <p className='text-sm m-2'>Home / 17 Sustainable Development Goals<span className='text-slate-500'> / SDG {id} </span> </p>

            <div>
                <Tabs />
            </div>
        </div>
    )
}
