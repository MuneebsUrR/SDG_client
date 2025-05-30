import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Button from '../components/common/Button';
import { newsItems } from '../../lib/news';

const Hero = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + newsItems.length) % newsItems.length);
    };

    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
            }}
        >
            {newsItems.map((item, index) => (
                <Box
                    key={item.id}
                    sx={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url(${item.imageUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        transition: 'opacity 1s ease-in-out',
                        opacity: index === currentIndex ? 1 : 0,
                    }}
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '40%',
                            left: '10%',
                            color: 'white',


                        }}
                    >
                        <div className='font-bold text-2xl md:text-5xl m-5'>
                            {item.title}
                        </div>
                        <div className='m-5'>

                            <Button link={item.href} title='KNOW MORE' />
                        </div>
                    </Box>
                </Box>
            ))}

            <IconButton
                sx={{
                    position: 'absolute',
                    left: 10,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'white',
                    backgroundColor: '#23036E',
                    '&:hover': { backgroundColor: '#3700b3' },
                }}
                onClick={handlePrev}
            >
                <ArrowBackIosIcon />
            </IconButton>

            <IconButton
                sx={{
                    position: 'absolute',
                    right: 10,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'white',
                    backgroundColor: '#23036E',
                    '&:hover': { backgroundColor: '#3700b3' },
                }}
                onClick={handleNext}
            >
                <ArrowForwardIosIcon />
            </IconButton>
        </Box>
    );
};

export default Hero;
