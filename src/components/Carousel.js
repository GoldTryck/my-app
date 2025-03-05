import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Sustituir en el futuro por alguna API de imágenes
const images = [
    'https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_1280.jpg',
    'https://cdn.pixabay.com/photo/2023/11/26/04/26/dawn-8412840_1280.jpg',
    'https://cdn.pixabay.com/photo/2025/02/07/13/45/leopard-9390105_1280.jpg',
    'https://cdn.pixabay.com/photo/2015/03/27/08/26/leopard-694460_1280.jpg'
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <Box
            sx={{
                width: '90%',
                margin: 'auto',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '400px',
                overflow: 'hidden',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            }}
        >
            {/* Botón izquierdo */}
            <IconButton
                onClick={prevSlide}
                sx={{
                    position: 'absolute',
                    left: 10,
                    background: 'rgba(0, 0, 0, 0.3)',
                    color: 'white',
                    '&:hover': { background: 'rgba(0, 0, 0, 0.5)' },
                    zIndex: 1,
                }}
            >
                <ArrowBackIosIcon />
            </IconButton>

            {/* Imagen actual */}
            <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover', // Ajustar la imagen sin distorsión
                    borderRadius: '10px',
                }}
            />

            {/* Botón derecho */}
            <IconButton
                onClick={nextSlide}
                sx={{
                    position: 'absolute',
                    right: 10,
                    background: 'rgba(0, 0, 0, 0.3)',
                    color: 'white',
                    '&:hover': { background: 'rgba(0, 0, 0, 0.5)' },
                    zIndex: 1,
                }}
            >
                <ArrowForwardIosIcon />
            </IconButton>
        </Box>
    );
};

export default Carousel;


