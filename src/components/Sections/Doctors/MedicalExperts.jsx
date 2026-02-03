/* Healthcare Portal - Medical Experts Carousel */
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import doctor1 from '../../../assets/lesley.png';
import doctor2 from '../../../assets/ahmad.png';
import doctor3 from '../../../assets/heena.png';
import doctor4 from '../../../assets/ankur.png';
import doctor5 from '../../../assets/ahmad-stevens.png';
import DoctorCard from './DoctorCard';
import { Autoplay, Pagination } from 'swiper/modules';

// Section showcasing medical specialists in a carousel
export default function MedicalExperts() {
    // Doctor profiles data
    const doctorProfiles = [
        { img: doctor1, title: 'Dr. Emily Carter', designation: 'Internal Medicine' },
        { img: doctor2, title: 'Dr. Rahul Mehta', designation: 'Neurosurgeon' },
        { img: doctor3, title: 'Dr. Priya Sharma', designation: 'Orthopedic Specialist' },
        { img: doctor4, title: 'Dr. Vikram Singh', designation: 'Internal Medicine' },
        { img: doctor5, title: 'Dr. Michael Roberts', designation: 'Neurosurgeon' },
        { img: doctor1, title: 'Dr. Emily Carter', designation: 'Internal Medicine' },
        { img: doctor2, title: 'Dr. Rahul Mehta', designation: 'Neurosurgeon' },
        { img: doctor3, title: 'Dr. Priya Sharma', designation: 'Orthopedic Specialist' },
        { img: doctor4, title: 'Dr. Vikram Singh', designation: 'Internal Medicine' },
        { img: doctor5, title: 'Dr. Michael Roberts', designation: 'Neurosurgeon' }
    ];

    return (
        <Box py={4} id="find-doctors">
            <Typography variant="h2" textAlign='center' mb={3} px={2}>
                Our Expert Physicians
            </Typography>
            <Swiper
                slidesPerView={2}
                spaceBetween={20}
                loop={true}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination]}
                pagination={{
                    clickable: true
                }}
                breakpoints={{
                    767: {
                        slidesPerView: 4
                    }
                }}
            >
                {doctorProfiles.map((doctor, idx) => (
                    <SwiperSlide key={idx}>
                        <DoctorCard
                            img={doctor.img}
                            title={doctor.title}
                            designation={doctor.designation} 
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
}
