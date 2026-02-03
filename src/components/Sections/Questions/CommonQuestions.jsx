/* Healthcare Portal - Common Questions Section */
import { Box, Container, Grid, Typography } from "@mui/material";
import questionsBanner from '../../../assets/faqs-banner.jpg';
import CollapsibleSection from "../../ExpandablePanel/CollapsibleSection";

// FAQ section with collapsible question-answer panels
export default function CommonQuestions() {
    // Question and answer data
    const questionData = [
        {
            question: 'What makes our healthcare services unique?',
            answer: 'We provide comprehensive healthcare services with a focus on personalized patient care, utilizing the latest medical technologies and treatment approaches.'
        },
        {
            question: 'How do we differ from other providers?',
            answer: 'Our commitment to patient-centered care, combined with experienced specialists and modern facilities, sets us apart in delivering exceptional healthcare.'
        },
        {
            question: 'Expert care with compassion and experience',
            answer: 'Our team of seasoned healthcare professionals brings years of expertise while maintaining a compassionate approach to every patient interaction.'
        },
        {
            question: 'How to book appointments for urgent cases?',
            answer: 'For urgent medical needs, you can use our priority booking system or call our emergency helpline to get immediate assistance and scheduling.'
        }
    ];

    return (
        <Box py={4}>
            <Container maxWidth='xl'>
                <Typography color='primary.main' fontWeight={600} textAlign='center'>
                    Find Your Answers
                </Typography>
                <Typography textAlign='center' variant='h2' mb={2}>
                    Common Questions
                </Typography>
                <Grid container alignItems='center' spacing={5}>
                    {/* FAQ illustration */}
                    <Grid item xs={12} md={6}>
                        <Box
                            src={questionsBanner}
                            component='img'
                            width={1}
                            height='auto'
                            alt="FAQ illustration"
                        />
                    </Grid>

                    {/* FAQ accordion */}
                    <Grid item xs={12} md={6}>
                        <Box maxWidth={450}>
                            <CollapsibleSection data={questionData} />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
