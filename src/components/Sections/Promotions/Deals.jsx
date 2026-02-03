/* Healthcare Portal - Promotional Deals Carousel */
import { Box, Container } from "@mui/material";
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import promoImage1 from '../../../assets/offer1.png';
import promoImage2 from '../../../assets/offer2.png';

// Carousel section displaying promotional offers and deals
export default function Deals() {
    return (
        <Box py={6}>
            <Container maxWidth='xl'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    modules={[Pagination]}
                    pagination={{
                        clickable: true
                    }}
                    breakpoints={{
                        767: {
                            slidesPerView: 3
                        }
                    }}
                >
                    <SwiperSlide>
                        <Box component={'img'} src={promoImage1} alt="Promotional offer" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Box component={'img'} src={promoImage2} alt="Promotional offer" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Box component={'img'} src={promoImage1} alt="Promotional offer" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Box component={'img'} src={promoImage2} alt="Promotional offer" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Box component={'img'} src={promoImage1} alt="Promotional offer" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Box component={'img'} src={promoImage2} alt="Promotional offer" />
                    </SwiperSlide>
                </Swiper>
            </Container>
        </Box>
    );
}
