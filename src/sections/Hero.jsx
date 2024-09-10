import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Button from '../components/common/Button';

const newsItems = [
    {
        id: 1,
        title: 'Bharat Soka Gakkai Collects 27,726 Kg Of Plastic Waste From Delhi-NCR For Recycling',
        imageUrl: 'https://picsum.photos/200/300', // Replace with actual image URL
        href: '#'

    },
    {
        id: 2,
        title: 'New Innovations in Renewable Energy',
        imageUrl: 'https://picsum.photos/200/300', // Replace with actual image URL
        href: '#'
    },
    {
        id: 3,
        title: 'Climate Change and Its Impact on Wildlife',
        imageUrl: 'https://picsum.photos/200/300', // Replace with actual image URL
        href: '#'
    },
];

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
                        <Typography variant="h3" sx={{ fontWeight: 'bold', margin: '20px' }}>
                            {item.title}
                        </Typography>
                        <div className='m-6'>

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
