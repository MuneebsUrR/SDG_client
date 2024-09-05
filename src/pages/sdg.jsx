import React from 'react'
import { useParams } from 'react-router-dom'
import Hero from '../components/sdg/Hero'
import Tabs from '../components/sdg/Tabs'
import { data } from '../../lib/data'

export default function SDG() {
    const { id } = useParams()
    const { title, description,overview,facts, targets } = data[id]
    const colors = [
        '#E5243B', '#DDA63A', '#4C9F38', '#C5192D', '#FF3A21',
        '#26BDE2', '#FCC30B', '#A21942', '#FD6925', '#DD1367',
        '#FD9D24', '#BF8B2E', '#3F7E44', '#0A97D9', '#56C02B',
        '#00689D', '#19486A'
    ];
    return (
        <div>
            <Hero id={id} description={description} />
            <p className='text-sm m-2'>Home / 17 Sustainable Development Goals<span className='text-slate-500'> / SDG {id} </span> </p>
            <h2 className='text-3xl font-bold p-2 mt-10 mb-10'>Let's learn a little more about SDG {id}.</h2>

            <div>
                <Tabs overview={overview} facts={facts} targets={targets} id={id} bgColor={colors[id-1]} />
            </div>
        </div>
    )
}
