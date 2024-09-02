import React from 'react'
import { useParams } from 'react-router-dom'
import Hero from '../components/sdg/Hero'

export default function SDG() {
    const {id} = useParams()
    return (
        <div>
           <Hero />
           <p className='text-sm m-2'>Home / 17 Sustainable Development Goals / {id} </p>
        </div>
    )
}
