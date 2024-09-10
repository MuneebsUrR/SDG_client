import React from 'react';
import SDGTitle from '../components/common/SDGTitle';
import Button from '../components/common/Button';
import { quotes } from '../../lib/quotes';
import Badge from '../components/common/Badge';
const ExploreQuotes = () => {
    return (
        <div>
            <div className='flex justify-center mt-20'>
                <SDGTitle text='SDG TIP FOR DAILY LIFE' />
            </div>

            <div className="max-w-5xl mx-auto mt-5 dark:text-dark">

                <div className="relative">

                    <div className="relative py-4">


                        <div className="absolute inset-0 bg-pink-50 rounded-lg border-2 border-red-300 border-t-0"></div>
                        <div className="absolute -top-6 left-20 text-red-500 text-7xl">"</div>
                        <div className="absolute -bottom-5 right-0 text-red-500 text-7xl rotate-180">"</div>
                        <p className='relative z-10 text-gray-800 text-xl pt-2 text-red-500 font-bold text-center'>{quotes[0].date}</p>
                        <p className="relative z-10 px-2 text-gray-800 text-xl pt-2 pb-8 text-center">
                            {quotes[0].text}
                        </p>
                        <p className="relative z-10 text-gray-800 text-sm text-center">Related SDGs</p>
                        <div>
                            <div className="relative z-10 flex items-center justify-center">
                                {
                                    quotes[0].sdg.map((number, index) => (
                                        <Badge number={number} />
                                    ))
                                }

                            </div>

                        </div>
                        {/* Adjusted the pink box to point downwards */}
                        <div className="absolute bottom-0 left-1/4 transform -translate-x-1/2 translate-y-1/2 w-16 h-16 bg-pink-50 border-b-2 border-r-2 border-red-300 rotate-45"></div>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[20px] border-r-[20px] border-t-[40px] border-t-pink-50 border-l-transparent border-r-transparent"></div>
                    </div>

                </div>

            </div>

            <div className='flex justify-center items-center mt-5'>
                <Button title='EXPLORE SDG TIP FOR DAILY LIFE' link={'/quotes'} />
            </div>


        </div>
    );
};

export default ExploreQuotes;
