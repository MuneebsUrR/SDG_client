import React from 'react';
// Update with the correct path

import { useNavigate } from 'react-router-dom';
import goal1 from '../../assets/E-WEB-Goal-01.png';
import goal2 from '../../assets/E-WEB-Goal-02.png';
import goal3 from '../../assets/E-WEB-Goal-03.png';
import goal4 from '../../assets/E-WEB-Goal-04.png';
import goal5 from '../../assets/E-WEB-Goal-05.png';
import goal6 from '../../assets/E-WEB-Goal-06.png';
import goal7 from '../../assets/E-WEB-Goal-07.png';
import goal8 from '../../assets/E-WEB-Goal-08.png';
import goal9 from '../../assets/E-WEB-Goal-09.png';
import goal10 from '../../assets/E-WEB-Goal-10.png';
import goal11 from '../../assets/E-WEB-Goal-11.png';
import goal12 from '../../assets/E-WEB-Goal-12.png';
import goal13 from '../../assets/E-WEB-Goal-13.png';
import goal14 from '../../assets/E-WEB-Goal-14.png';
import goal15 from '../../assets/E-WEB-Goal-15.png';
import goal16 from '../../assets/E-WEB-Goal-16.png';
import goal17 from '../../assets/E-WEB-Goal-17.png';

const Hero = ({ id, description }) => {
    const goals = [
        { id: 1, icon: goal1 },
        { id: 2, icon: goal2 },
        { id: 3, icon: goal3 },
        { id: 4, icon: goal4 },
        { id: 5, icon: goal5 },
        { id: 6, icon: goal6 },
        { id: 7, icon: goal7 },
        { id: 8, icon: goal8 },
        { id: 9, icon: goal9 },
        { id: 10, icon: goal10 },
        { id: 11, icon: goal11 },
        { id: 12, icon: goal12 },
        { id: 13, icon: goal13 },
        { id: 14, icon: goal14 },
        { id: 15, icon: goal15 },
        { id: 16, icon: goal16 },
        { id: 17, icon: goal17 },
    ];

    // Array of button numbers and their corresponding colors
    const colors = [
        '#E5243B', '#DDA63A', '#4C9F38', '#C5192D', '#FF3A21',
        '#26BDE2', '#FCC30B', '#A21942', '#FD6925', '#DD1367',
        '#FD9D24', '#BF8B2E', '#3F7E44', '#0A97D9', '#56C02B',
        '#00689D', '#19486A'
    ];
    const navigate = useNavigate();
    const handleClick = (index) => {
        navigate(`/sdg/${index}`);
    }

    return (
        <div className='flex'>
            <div className='w-1/4'>
                <img src={goals[id - 1].icon} style={{ height: '75vh', width: '100%' }} alt="SDG Logo" />
            </div>
            <div className='w-full'>
                <div
                    style={{
                        backgroundImage: 'url(https://picsum.photos/200/300)',
                        width: '100%',
                        height: '75vh', // Adjust height as needed
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                    className='flex flex-col justify-center items-left'
                >
                    <h1 className='text-white font-bold text-4xl ml-10 mb-2'>SDG {id}</h1>
                    <h2 className='text-white font-bold text-2xl ml-10 mb-10'>{description}</h2>
                    <div className='ml-10'>
                        {
                            colors.map((color, index) => {
                                return (
                                    <button onClick={() => handleClick(index + 1)} className='text-xl m-1 w-14 h-14 text-white font-bold rounded-lg transition-transform transform hover:scale-110' key={index} style={{ backgroundColor: color }}>
                                        {index + 1}
                                    </button>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
