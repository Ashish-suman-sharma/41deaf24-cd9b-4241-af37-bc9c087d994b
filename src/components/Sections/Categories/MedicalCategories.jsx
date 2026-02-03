/* Healthcare Portal - Medical Categories Section */
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import FeatureCard from '../../ServiceTile/FeatureCard';
import dentalIcon from '../../../assets/Drugstore.png';
import generalIcon from '../../../assets/primary-care.png';
import heartIcon from '../../../assets/cardiology.png';
import scanIcon from '../../../assets/mri.png';
import labIcon from '../../../assets/blood-test.png';
import mentalIcon from '../../../assets/piscologist.png';
import xrayIcon from '../../../assets/X-Ray.png';

// Section displaying medical specialization categories
export default function MedicalCategories() {
    // Category data with icons and labels
    const categoryData = [
        { icon: dentalIcon, title: 'Dental Care' },
        { icon: generalIcon, title: 'General Medicine' },
        { icon: heartIcon, title: 'Heart Health' },
        { icon: scanIcon, title: 'MRI Scanning' },
        { icon: labIcon, title: 'Lab Tests' },
        { icon: mentalIcon, title: 'Mental Health' },
        { icon: dentalIcon, title: 'Diagnostics' },
        { icon: xrayIcon, title: 'Radiology' }
    ];

    return (
        <Box py={6} sx={{ background: 'linear-gradient(#E7F0FF, #E8F1FF)' }}>
            <Container sx={{ textAlign: 'center' }}>
                <Typography variant="h2" mb={4}>
                    Browse by Specialty
                </Typography>

                <Grid container spacing={{ xs: 1, md: 3 }} mb={5} justifyContent={'center'}>
                    {categoryData.map(category => (
                        <Grid item xs={4} md={3} key={category.title}>
                            <FeatureCard img={category.icon} title={category.title} bgColor={'#FFFFFF'} shadow={true} />
                        </Grid>
                    ))}
                </Grid>

                <Button
                    variant="contained"
                    size="large"
                    disableElevation
                >
                    See All Categories
                </Button>
            </Container>
        </Box>
    );
}
