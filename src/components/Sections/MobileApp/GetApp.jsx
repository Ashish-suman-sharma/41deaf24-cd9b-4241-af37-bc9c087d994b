/* Healthcare Portal - Mobile App Download Section */
import mobilePreview from "../../../assets/mobile.jpg";
import playstoreBadge from "../../../assets/playstore.png";
import appstoreBadge from "../../../assets/apple-logo.png";
import arrowIndicator from "../../../assets/down-arr.png";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import PhoneInput from "./PhoneInput";

// Section promoting mobile app download with SMS link option
export default function GetApp() {
  return (
    <Box
      sx={{ background: "linear-gradient(#E7F0FF 100%, #E8F1FF 47%)", pt: 5 }}
    >
      <Container>
        <Grid container spacing={3} alignItems="center">
          {/* Mobile preview image */}
          <Grid item xs={12} md={5.5}>
            <Box src={mobilePreview} component="img" width={1} height="auto" alt="Mobile app preview" />
          </Grid>

          {/* Download info and buttons */}
          <Grid item xs={12} md={6.5}>
            <Box
              position="relative"
              pl={{ xs: "36px", md: "50px" }}
              mb={{ xs: 4, md: 0 }}
            >
              <Typography variant="h2" mb={2}>
                Get the
                <br />
                <Box component="span" color="primary.main">
                  HealthCare{" "}
                </Box>
                Mobile App
              </Typography>

              <Box
                src={arrowIndicator}
                component="img"
                width={{ xs: 24, md: 40 }}
                position="absolute"
                left={0}
                top={50}
                alt="Download arrow"
              />

              <PhoneInput />

              {/* App store buttons */}
              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={{ xs: 1, md: 2 }}
              >
                <Button
                  sx={{
                    bgcolor: "#333",
                    color: "#fff",
                    py: 1.5,
                    borderRadius: 1.5,
                  }}
                  size={"large"}
                  startIcon={<img src={playstoreBadge} height={24} alt="Play Store" />}
                  variant="contained"
                  disableElevation
                >
                  Play Store
                </Button>
                <Button
                  sx={{
                    bgcolor: "#333",
                    color: "#fff",
                    py: 1.5,
                    borderRadius: 1.5,
                  }}
                  size="large"
                  startIcon={<img src={appstoreBadge} height={24} alt="App Store" />}
                  variant="contained"
                  disableElevation
                >
                  App Store
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
