/* Healthcare Portal - Landing Page Component */
import { Container, Box, Stack } from "@mui/material";
import MainSlider from "../components/BannerCarousel/MainSlider";
import CityStateSelector from "../components/LocationFilter/CityStateSelector";
import CommonQuestions from "../components/Sections/Questions/CommonQuestions";
import FamilySection from "../components/Sections/FamilyCare/FamilySection";
import LatestNews from "../components/Sections/Articles/LatestNews";
import PatientSupport from "../components/Sections/HealthCare/PatientSupport";
import MedicalExperts from "../components/Sections/Doctors/MedicalExperts";
import MedicalCategories from "../components/Sections/Categories/MedicalCategories";
import Deals from "../components/Sections/Promotions/Deals";
import TopNav from "../components/Navigation/TopNav";
import QuickServices from "../components/ServiceGrid/QuickServices";

// Main landing page displaying all homepage sections
export default function MainPage() {
  return (
    <Box>
      {/* Hero section with gradient background */}
      <Box
        sx={{
          background:
            "linear-gradient(#E7F0FF , rgba(232, 241, 255, 0.47) 90%, #fff 10%)",
        }}
        mb={4}
      >
        <TopNav />
        <Container maxWidth="xl">
          <MainSlider />
          {/* Search and services card overlay */}
          <Stack
            p={{ xs: 2.5, md: 8 }}
            mt={{ xs: -2, md: 0, lg: -6, xl: -10 }}
            position="relative"
            zIndex={99}
            bgcolor="#fff"
            borderRadius="15px"
            spacing={10}
            boxShadow="0 0 12px rgba(0,0,0,0.1)"
          >
            <CityStateSelector />
            <QuickServices />
          </Stack>
        </Container>
      </Box>

      {/* Homepage sections */}
      <Deals />
      <MedicalCategories />
      <MedicalExperts />
      <PatientSupport />
      <LatestNews />
      <FamilySection />
      <CommonQuestions />
    </Box>
  );
}
