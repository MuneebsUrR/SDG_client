import React from 'react'
import quoteIcon from '../assets/quote-icon.png'
import banner from '../assets/quote-banner.jpg'
import QuoteCard from '../components/quote/QuoteCard'
import { quotes } from '../../lib/quotes'
export default function Quote() {
    return (
        <div>
            <div className=' h-[45vh] md:h-[60vh]' style={{
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
            <p className='text-sm p-2'>Home <span className='text-slate-500'> / SDG Tip for Daily Life</span></p>
            <div className='flex justify-center items-center mt-5'>
                <img src={quoteIcon} alt="" />
            </div>
            <div>
                <p className='text-center mx-auto max-w-6xl font-semibold text-lg py-5'>Sustainability is not about one person adopting a perfectly sustainable lifestyle. Sustainability is about each person across the planet taking one small step every day to adopt sustainability as a way of life. These 'SDG Tips for Daily Life' are simple suggestions that can help us live sustainabily.</p>
                <hr className='m-4 text-slate-500' />
            </div>
            <div className="container mx-auto mt-10 px-4">
                {/* Responsive grid with 3 columns on medium screens and 1 column on small screens */}
                <div className="flex flex-wrap justify-center gap-8">
                    {quotes.map((quote, index) => (
                        <QuoteCard
                            key={index}
                            date={quote.date}
                            text={quote.text}
                            sdg={quote.sdg}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
