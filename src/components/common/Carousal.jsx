import React, { useState, useEffect, useContext } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import GroupsIcon from '@mui/icons-material/Groups';
import Badge from '../common/Badge';
import Button from './Button';
import CampaignContext from '../../context/CampaignContext';



export const PledgeCard = ({ pledge }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0 w-full md:w-[calc(49%-0.5rem)]">
        <img src={pledge?.image} alt={pledge?.title} className="w-full h-64 object-cover" />
        <div className="p-4 dark:text-black bg-gradient-to-r from-yellow-100 via-pink-100 to-pink-50">
            <h2 className="text-xl font-bold mb-2">{pledge?.title}</h2>
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <GroupsIcon fontSize='large' />
                    <span><b className='text-lg'>{pledge?.pledges}</b> Pledges</span>
                </div>
                <div className="flex">
                    {pledge?.sdgs.map((sdg) => (
                        <Badge number={sdg} />
                    ))}
                </div>
            </div>
            <div>
                <Button link={`/sdg-campaigns/${pledge?.title}`} title='KNOW MORE' />
            </div>
        </div>
    </div>
);

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const { campaigns } = useContext(CampaignContext);
  

    const nextSlide = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrentIndex((prevIndex) =>
                prevIndex + 2 >= campaigns.length ? 0 : prevIndex + 2
            );
        }
    };

    const prevSlide = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrentIndex((prevIndex) =>
                prevIndex - 2 < 0 ? campaigns.length - 2 : prevIndex - 2
            );
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAnimating(false);
        }, 300); // Match this with the transition duration

        return () => clearTimeout(timer);
    }, [currentIndex]);

    return (
        <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
            <div
                className="flex gap-1 md:gap-4 transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 50}%)` }}
            >
                {campaigns && campaigns.map((pledge, index) => (
                    <PledgeCard key={index} pledge={pledge} />
                ))}
            </div>
            <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
                disabled={isAnimating}
                style={{ backgroundColor: '#23036E', color: 'white' }}
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
                disabled={isAnimating}
                style={{ backgroundColor: '#23036E', color: 'white' }}
            >
                <ChevronRight size={24} />
            </button>
        </div>
    );
};

export default Carousel;