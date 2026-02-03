/* Healthcare Portal - Site Footer Component */
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import brandLogo from "../../assets/logo.png";
import facebookIcon from "../../assets/fb.png";
import pinterestIcon from "../../assets/pinterest.png";
import twitterIcon from "../../assets/twitter.png";
import youtubeIcon from "../../assets/yt.png";
import FooterMenuItem from "./FooterMenuItem";

// Footer component with links and social media icons
export default function SiteFooter() {
  return (
    <Box bgcolor="primary.secondary" pb={3} pt={6}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {/* Brand and social section */}
          <Grid item xs={12} md={4.5}>
            <Stack
              alignItems="flex-start"
              justifyContent="space-between"
              height={1}
            >
              <Box src={brandLogo} height={36} alt="Healthcare Portal" component="img" mb={2} />
              <Stack direction="row" spacing={1.5}>
                <Box component="img" src={facebookIcon} height={36} alt="Facebook" />
                <Box component="img" src={twitterIcon} height={36} alt="Twitter" />
                <Box component="img" src={youtubeIcon} height={36} alt="YouTube" />
                <Box component="img" src={pinterestIcon} height={36} alt="Pinterest" />
              </Stack>
            </Stack>
          </Grid>

          {/* Quick links column */}
          <Grid item xs={12} md={2.5}>
            <Stack spacing={2}>
              <FooterMenuItem>About Us</FooterMenuItem>
              <FooterMenuItem>Pricing Plans</FooterMenuItem>
              <FooterMenuItem>Photo Gallery</FooterMenuItem>
              <FooterMenuItem>Book Appointment</FooterMenuItem>
              <FooterMenuItem>Privacy Policy</FooterMenuItem>
            </Stack>
          </Grid>

          {/* Specialties column */}
          <Grid item xs={12} md={2.5}>
            <Stack spacing={2}>
              <FooterMenuItem>Orthopedics</FooterMenuItem>
              <FooterMenuItem>Neurology</FooterMenuItem>
              <FooterMenuItem>Dental Services</FooterMenuItem>
              <FooterMenuItem>Eye Care</FooterMenuItem>
              <FooterMenuItem>Heart Care</FooterMenuItem>
            </Stack>
          </Grid>

          {/* Additional links column */}
          <Grid item xs={12} md={2.5}>
            <Stack spacing={2}>
              <FooterMenuItem>About Us</FooterMenuItem>
              <FooterMenuItem>Pricing Plans</FooterMenuItem>
              <FooterMenuItem>Photo Gallery</FooterMenuItem>
              <FooterMenuItem>Book Appointment</FooterMenuItem>
              <FooterMenuItem>Privacy Policy</FooterMenuItem>
            </Stack>
          </Grid>
        </Grid>

        {/* Copyright notice */}
        <Typography
          fontWeight={300}
          color="#fff"
          fontSize={14}
          pt={3}
          mt={5}
          borderTop="1px solid rgba(255,255,255,0.1)"
        >
          Copyright ©2024 HealthCare Portal. All Rights Reserved
        </Typography>
      </Container>
    </Box>
  );
}
