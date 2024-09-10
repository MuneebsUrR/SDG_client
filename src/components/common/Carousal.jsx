import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import GroupsIcon from '@mui/icons-material/Groups';
import Badge from '../common/Badge';
import Button from './Button';
const pledges = [
    {
        title: "MANGROVE CLEANING DRIVE",
        image: "https://picsum.photos/200/300",
        pledgeText: "I pledge to keep the mangroves clean",
        pledges: 246,
        sdgs: [3, 11, 12, 13, 14, 15]
    },
    {
        title: "SAY NO TO PLASTIC",
        image: "https://picsum.photos/200/300",
        pledgeText: "I pledge to say NO to plastic bottles and plastic bags.",
        pledges: 2227,
        sdgs: [12, 13, 14, 15]
    },
    {
        title: "REDUCE CARBON FOOTPRINT",
        image: "https://picsum.photos/200/300",
        pledgeText: "I pledge to reduce my carbon footprint.",
        pledges: 1589,
        sdgs: [11, 13]
    },
    {
        title: "SAVE WATER",
        image: "https://picsum.photos/200/300",
        pledgeText: "I pledge to conserve water in my daily life.",
        pledges: 3045,
        sdgs: [6, 12, 14]
    },
];

export const PledgeCard = ({ pledge }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0 w-full md:w-[calc(49%-0.5rem)]">
        <img src={pledge.image} alt={pledge.title} className="w-full h-48 object-cover" />
        <div className="p-4 bg-gradient-to-r from-yellow-100 via-pink-100 to-pink-50">
            <h2 className="text-xl font-bold mb-2">{pledge.title}</h2>
            <p className="text-md font-semibold mb-4">{pledge.pledgeText}</p>
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <GroupsIcon fontSize='large' />
                    <span><b className='text-lg'>{pledge.pledges}</b> Pledges</span>
                </div>
                <div className="flex">
                    {pledge.sdgs.map((sdg) => (
                       <Badge number={sdg} />
                    ))}
                </div>
            </div>
           <div>
              <Button link={`/sdg-campaigns/${pledge.pledgeText}`} title='KNOW MORE' />
           </div>
        </div>
    </div>
);

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const nextSlide = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrentIndex((prevIndex) =>
                prevIndex + 2 >= pledges.length ? 0 : prevIndex + 2
            );
        }
    };

    const prevSlide = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrentIndex((prevIndex) =>
                prevIndex - 2 < 0 ? pledges.length - 2 : prevIndex - 2
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
                {pledges.map((pledge, index) => (
                    <PledgeCard key={index} pledge={pledge} />
                ))}
            </div>
            <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
                disabled={isAnimating}
                style={{backgroundColor: '#23036E', color: 'white'}}
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
                disabled={isAnimating}
                style={{backgroundColor: '#23036E', color: 'white'}}
            >
                <ChevronRight size={24} />
            </button>
        </div>
    );
};

export default Carousel;