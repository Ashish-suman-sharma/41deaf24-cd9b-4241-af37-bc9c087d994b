/* Healthcare Portal - News Article Card */
import { Box, Stack, Typography } from "@mui/material";
import articleImage from '../../../assets/blog.png';
import authorImage from '../../../assets/person.png';

// Card component displaying a single news article
export default function NewsCard() {
    return (
        <Box border='1px solid rgba(0,0,0,0.1)' borderRadius={2}>
            <Box
                component='img'
                src={articleImage}
                width={1}
                alt="Article thumbnail"
            />
            <Box p={2}>
                <Typography color='#77829D' fontWeight={500} mb={1} fontSize={{ xs: 12, md: 16 }}>
                    Health Tips | April 15, 2024
                </Typography>
                <Typography 
                    component='h3' 
                    color='#1B3C74' 
                    fontSize={{ xs: 14, md: 18 }} 
                    fontWeight={500} 
                    lineHeight={1.2} 
                    mb={2}
                >
                    Essential Tips for Maintaining Your Mental Wellness During Recovery
                </Typography>
                <Stack direction='row' spacing={1} alignItems='center'>
                    <Box
                        component='img'
                        src={authorImage}
                        height={32}
                        width={32}
                        alt="Author"
                    />
                    <Typography color='#1B3C74' fontSize={{ xs: 12, md: 16 }}>
                        Sarah Johnson
                    </Typography>
                </Stack>
            </Box>
        </Box>
    );
}
