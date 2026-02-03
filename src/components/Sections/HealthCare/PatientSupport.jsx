/* Healthcare Portal - Patient Support Section */
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import supportBanner from '../../../assets/patientcaring.png';
import checkIcon from '../../../assets/tick-blue.png';

// Section highlighting patient support features
export default function PatientSupport() {
    return (
        <Box py={6} sx={{ background: 'linear-gradient(#E7F0FF, #E8F1FF)' }}>
            <Container>
                <Grid container spacing={6} alignItems='center'>
                    {/* Support illustration */}
                    <Grid item xs={12} md={6}>
                        <Box
                            component='img'
                            src={supportBanner}
                            width={1}
                            alt="Patient support"
                        />
                    </Grid>

                    {/* Support features content */}
                    <Grid item xs={12} md={6}>
                        <Typography
                            fontWeight={600}
                            color="primary.main"
                        >
                            SUPPORTING PATIENTS WORLDWIDE
                        </Typography>
                        <Typography variant="h2" mb={1}>
                            Patient <Box component='span' color='primary.main'>Support</Box>
                        </Typography>
                        <Typography color='#77829D' lineHeight={1.8}>
                            We are committed to providing exceptional care with respect and compassion. Our mission is to be your trusted healthcare partner, delivering the highest quality of medical services.
                        </Typography>

                        {/* Feature list */}
                        <List sx={{ fontSize: { xs: 12, md: 18 } }}>
                            <ListItem disableGutters>
                                <ListItemIcon sx={{ minWidth: 32 }}>
                                    <Box component='img' src={checkIcon} height={22} width={22} alt="Check" />
                                </ListItemIcon>
                                <ListItemText
                                    primary='Track Your Health Progress'
                                    primaryTypographyProps={{ fontSize: { xs: 14, md: 18 }, fontWeight: 500, color: '#1B3C74' }}
                                />
                            </ListItem>
                            <ListItem disableGutters>
                                <ListItemIcon sx={{ minWidth: 32 }}>
                                    <Box component='img' src={checkIcon} height={22} width={22} alt="Check" />
                                </ListItemIcon>
                                <ListItemText
                                    primary='Access Test Results Online'
                                    primaryTypographyProps={{ fontSize: { xs: 14, md: 18 }, fontWeight: 500, color: '#1B3C74' }}
                                />
                            </ListItem>
                            <ListItem disableGutters>
                                <ListItemIcon sx={{ minWidth: 32 }}>
                                    <Box component='img' src={checkIcon} height={22} width={22} alt="Check" />
                                </ListItemIcon>
                                <ListItemText
                                    primary='Schedule and Manage Visits'
                                    primaryTypographyProps={{ fontSize: { xs: 14, md: 18 }, fontWeight: 500, color: '#1B3C74' }}
                                />
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
