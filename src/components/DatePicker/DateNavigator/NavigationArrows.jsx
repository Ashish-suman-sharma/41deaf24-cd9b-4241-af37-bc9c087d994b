/* Healthcare Portal - Carousel Navigation Arrows */
import { useSwiper } from 'swiper/react';
import nextIcon from '../../../assets/next.png';
import prevIcon from '../../../assets/prev.png';
import { Box } from '@mui/material';

// Previous slide navigation button
function PrevArrow() {
    const swiperInstance = useSwiper();
    
    const goToPrevious = () => {
        swiperInstance.slidePrev();
    };

    return (
        <Box
            component='img'
            src={prevIcon}
            onClick={goToPrevious}
            height={48}
            width={48}
            position='absolute'
            left={0}
            top={0}
            sx={{ cursor: 'pointer' }}
            zIndex={999}
            bgcolor='#fff'
            alt="Previous"
        />
    );
}

// Next slide navigation button
function NextArrow() {
    const swiperInstance = useSwiper();
    
    const goToNext = () => {
        swiperInstance.slideNext();
    };

    return (
        <Box
            component='img'
            src={nextIcon}
            onClick={goToNext}
            height={48}
            width={48}
            position='absolute'
            right={0}
            top={0}
            sx={{ cursor: 'pointer' }}
            zIndex={999}
            bgcolor='#fff'
            alt="Next"
        />
    );
}

export { NextArrow, PrevArrow };
