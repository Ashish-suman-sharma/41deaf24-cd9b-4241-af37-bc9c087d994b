/* Healthcare Portal - Day Selection Component */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Box, Divider, Stack, Typography } from '@mui/material';
import selectorStyles from './DayChooser.module.css';
import { format, add, isEqual, startOfDay } from 'date-fns';
import { NextArrow, PrevArrow } from './NavigationArrows';

// Day selector carousel for choosing appointment date
export default function DayChooser({ selectedDate, setSelectedDate, totalSlots }) {
    const currentDate = startOfDay(new Date());
    const dateRange = [];

    // Generate next 7 days
    for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
        dateRange.push(add(currentDate, { days: dayIndex }));
    }

    // Format date label (Today, Tomorrow, or formatted date)
    const getDateLabel = (dateItem) => {
        if (isEqual(currentDate, dateItem)) {
            return 'Today';
        } else if (isEqual(currentDate, add(dateItem, { days: -1 }))) {
            return 'Tomorrow';
        } else {
            return format(dateItem, 'E, d LLL');
        }
    };

    const selectDate = (dateItem) => {
        setSelectedDate(dateItem);
    };

    return (
        <Stack pt={3} position='relative'>
            <Divider sx={{ mb: 3 }} />
            <Swiper
                slidesPerView={4}
                loop={false}
                spaceBetween={11}
                className={selectorStyles.carouselContainer}
                breakpoints={{
                    767: {
                        spaceBetween: 30,
                        slidesPerView: 3
                    }
                }}
            >
                {dateRange.map((dateItem, idx) => (
                    <SwiperSlide key={idx} className={selectorStyles.carouselItem}>
                        <Stack
                            textAlign='center'
                            onClick={() => selectDate(dateItem)}
                            sx={{ cursor: 'pointer' }}
                        >
                            <Typography
                                fontWeight={isEqual(dateItem, selectedDate) ? 700 : 400}
                                fontSize={{ xs: 11, md: 16 }}
                            >
                                {getDateLabel(dateItem)}
                            </Typography>
                            <Typography fontSize={{ xs: 8, md: 12 }} color='primary.green'>
                                {`${totalSlots} Slots Available`}
                            </Typography>

                            {/* Active indicator bar */}
                            <Box
                                height={{ xs: '4px', md: '5px' }}
                                width={{ xs: 1, md: 'calc(100% - 50px)' }}
                                position='relative'
                                bottom='0'
                                bgcolor={isEqual(dateItem, selectedDate) ? 'primary.main' : 'rgba(0,0,0,0)'}
                                left={0}
                                zIndex={999}
                                mt='5px'
                                mx='auto'
                            />
                        </Stack>
                    </SwiperSlide>
                ))}

                {/* Navigation arrows for desktop */}
                <span slot="container-start">
                    <Box display={{ xs: 'none', md: 'block' }}>
                        <PrevArrow />
                    </Box>
                </span>

                <span slot="container-end">
                    <Box display={{ xs: 'none', md: 'block' }}>
                        <NextArrow />
                    </Box>
                </span>
            </Swiper>

            {/* Background indicator track */}
            <Box
                height={{ xs: '4px', md: '5px' }}
                width={{ xs: 1, md: 'calc(100% - 150px)' }}
                bgcolor='#F0F0F5'
                mt='5px'
                position='absolute'
                bottom={0}
                left='50%'
                sx={{ translate: '-50% 0' }}
            />
        </Stack>
    );
}
