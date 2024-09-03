import React from 'react'
import { useParams } from 'react-router-dom'
import Hero from '../components/sdg/Hero'
import Tabs from '../components/sdg/Tabs'
import { data } from '../../lib/data'

export default function SDG() {
    const { id } = useParams()
    const { title, description,overview,facts } = data[id]
    return (
        <div>
            <Hero id={id} description={description} />
            <p className='text-sm m-2'>Home / 17 Sustainable Development Goals<span className='text-slate-500'> / SDG {id} </span> </p>

            <div>
                <Tabs overview={overview} facts={facts} />
            </div>
        </div>
    )
}
