/* Healthcare Portal - Family Care Section */
import { Box, Container, Grid, Typography } from "@mui/material";
import familyBanner from '../../../assets/our-families-banner.png';

// Section highlighting family healthcare services
export default function FamilySection() {
    return (
        <Box pt={3} sx={{ background: 'linear-gradient(#E7F0FF, #E8F1FF)' }}>
            <Container>
                <Grid container alignItems='center' spacing={{ xs: 2, md: 10 }}>
                    {/* Text content */}
                    <Grid item xs={12} md={6}>
                        <Typography
                            fontWeight={600}
                            color="primary.main"
                        >
                            DEDICATED TO YOUR FAMILY'S HEALTH AND WELLBEING
                        </Typography>
                        <Typography variant="h2">
                            Family Healthcare
                        </Typography>
                        <Typography color='#77829D' lineHeight={1.8}>
                            Our team works closely with you to create personalized healthcare plans, including ongoing management of chronic conditions. When specialized care is needed, we provide expert referrals and guidance to ensure you receive the best possible treatment. All consultations are handled with utmost sensitivity and confidentiality.
                        </Typography>
                    </Grid>

                    {/* Family image */}
                    <Grid item xs={12} md={6}>
                        <Box
                            component='img'
                            src={familyBanner}
                            width={1}
                            height='auto'
                            alt="Family healthcare"
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
