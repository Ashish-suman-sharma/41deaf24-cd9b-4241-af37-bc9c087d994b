/* Healthcare Portal - Latest News Section */
import { Box, Container, Grid, Typography } from "@mui/material";
import NewsCard from "./NewsCard";

// Section displaying latest health news and articles
export default function LatestNews() {
    return (
        <Box py={6}>
            <Container>
                <Typography color='primary.main' fontWeight={600} textAlign='center'>
                    Health Articles
                </Typography>
                <Typography textAlign='center' variant='h2' mb={2}>
                    Latest Health Updates
                </Typography>

                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <NewsCard />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <NewsCard />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <NewsCard />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
