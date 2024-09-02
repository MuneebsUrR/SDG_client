import React from 'react';
// Update with the correct path
import logoImage from '../../assets/E-WEB-Goal-01.png';    // Update with the correct path

const Hero = () => {
    // Array of button numbers and their corresponding colors
    const colors = [
        '#E5243B', '#DDA63A', '#4C9F38', '#C5192D', '#FF3A21',
        '#26BDE2', '#FCC30B', '#A21942', '#FD6925', '#DD1367',
        '#FD9D24', '#BF8B2E', '#3F7E44', '#0A97D9', '#56C02B',
        '#00689D', '#19486A'
    ];

    return (
        <div className='flex'>
            <div className='w-1/4'>
                <img src={logoImage} style={{ height: '75vh', width: '100%' }} alt="SDG Logo" />
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
                    <h1 className='text-white font-bold text-4xl ml-10 mb-2'>SDG 1</h1>
                    <h2 className='text-white font-bold text-2xl ml-10 mb-10'>End poverty in all its forms everywhere</h2>
                    <div className='ml-10'>
                        {
                            colors.map((color, index) => {
                                return (
                                    <button className='text-xl m-1 w-14 h-14 text-white font-bold rounded-lg transition-transform transform hover:scale-110' key={index} style={{ backgroundColor: color }}>
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
