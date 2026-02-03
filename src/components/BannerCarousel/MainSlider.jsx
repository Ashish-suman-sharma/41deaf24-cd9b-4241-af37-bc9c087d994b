/* Healthcare Portal - Hero Banner Carousel */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import heroBanner from '../../assets/home.webp';
import { Box, Stack, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

// Main hero section with promotional content and CTA
export default function MainSlider() {
    return (
        <Swiper>
            <SwiperSlide>
                <Stack direction={{ xs: 'column', md: "row" }} spacing={6} alignItems="center" pt={2}>
                    <Box>
                        <Typography variant='h3' component='h1'>No Travel Required! Discover Online</Typography>
                        <Typography variant='h1' component='h1' mb={1}>Healthcare <span style={{ color: '#2AA7FF' }}>Facilities</span></Typography>
                        <Typography color="#5C6169" fontSize={{ md: 20 }} mb={3}>
                            Get instant access to specialists available 24/7 or schedule a video consultation with your preferred doctor.
                        </Typography>
                        <Link to='/search'>
                            <Button variant='contained' size="large" disableElevation>
                                Explore Centers
                            </Button>
                        </Link>
                    </Box>
                    <Box
                        component={'img'}
                        src={heroBanner}
                        width={{ xs: 1, md: "50%" }}
                        alt="Healthcare services"
                    />
                </Stack>
            </SwiperSlide>
        </Swiper>
    );
}
