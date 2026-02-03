/* Healthcare Portal - Medical Center Search Results */
import { Container, Stack, Box, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MedicalCenterCard from "../components/CenterCard/MedicalCenterCard";
import verifiedIcon from "../assets/tick.png";
import promotionBanner from "../assets/cta.png";
import CityStateSelector from "../components/LocationFilter/CityStateSelector";
import AppointmentModal from "../components/ReservationDialog/AppointmentModal";
import AlertMessage from "../components/ToastNotification/AlertMessage";
import TopNav from "../components/Navigation/TopNav";

// Search results page displaying available medical centers
export default function SearchResults() {
  const [queryParams] = useSearchParams();
  const [medicalCenters, setMedicalCenters] = useState([]);
  const [selectedState, setSelectedState] = useState(queryParams.get("state"));
  const [selectedCity, setSelectedCity] = useState(queryParams.get("city"));
  
  // Available consultation time slots
  const consultationSlots = {
    morning: ["11:30 AM"],
    afternoon: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
    evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
  };
  
  const [modalVisible, setModalVisible] = useState(false);
  const [reservationInfo, setReservationInfo] = useState({});
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [dataLoading, setDataLoading] = useState(false);

  // Fetch medical centers based on location selection
  useEffect(() => {
    const fetchMedicalCenters = async () => {
      setMedicalCenters([]);
      setDataLoading(true);
      try {
        const response = await axios.get(
          `https://meddata-backend.onrender.com/data?state=${selectedState}&city=${selectedCity}`
        );
        setMedicalCenters(response.data);
        setDataLoading(false);
      } catch (error) {
        console.error("Error fetching medical centers:", error);
        setDataLoading(false);
      }
    };

    if (selectedState && selectedCity) {
      fetchMedicalCenters();
    }
  }, [selectedState, selectedCity]);

  // Update state when URL parameters change
  useEffect(() => {
    setSelectedState(queryParams.get("state"));
    setSelectedCity(queryParams.get("city"));
  }, [queryParams]);

  // Handler to open booking modal with selected center details
  const openReservationModal = (centerDetails) => {
    setReservationInfo(centerDetails);
    setModalVisible(true);
  };

  return (
    <>
      <TopNav />
      <Box
        sx={{
          background: "linear-gradient(#EFF5FE, rgba(241,247,255,0.47))",
          width: "100%",
          pl: 0,
        }}
      >
        {/* Search header section */}
        <Box
          sx={{
            position: "relative",
            background: "linear-gradient(90deg, #2AA7FF, #0C8CE5)",
            borderBottomLeftRadius: "1rem",
            borderBottomRightRadius: "1rem",
          }}
        >
          <Container
            maxWidth="xl"
            sx={{
              background: "#fff",
              p: 3,
              borderRadius: 2,
              transform: "translatey(50px)",
              mb: "50px",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            }}
          >
            <CityStateSelector />
          </Container>
        </Box>

        {/* Results listing section */}
        <Container maxWidth="xl" sx={{ pt: 8, pb: 10, px: { xs: 0, md: 4 } }}>
          {medicalCenters.length > 0 && (
            <Box sx={{ mb: 3 }}>
              <Typography
                component="h1"
                fontSize={24}
                lineHeight={1.1}
                mb={2}
                fontWeight={500}
              >
                {`${medicalCenters.length} healthcare facilities available in `}
                <span style={{ textTransform: "capitalize" }}>
                  {selectedCity.toLocaleLowerCase()}
                </span>
              </Typography>
              <Stack direction="row" spacing={2}>
                <img src={verifiedIcon} height={24} width={24} alt="verified" />
                <Typography color="#787887" lineHeight={1.4}>
                  Schedule appointments with minimal waiting time & verified physician information
                </Typography>
              </Stack>
            </Box>
          )}

          <Stack alignItems="flex-start" direction={{ md: "row" }}>
            <Stack
              mb={{ xs: 4, md: 0 }}
              spacing={3}
              width={{ xs: 1, md: "calc(100% - 384px)" }}
              mr="24px"
            >
              {medicalCenters.length > 0 &&
                medicalCenters.map((center) => (
                  <MedicalCenterCard
                    key={center["Hospital Name"]}
                    details={center}
                    availableSlots={consultationSlots}
                    handleBooking={openReservationModal}
                  />
                ))}

              {dataLoading && (
                <Typography variant="h3" bgcolor="#fff" p={3} borderRadius={2}>
                  Fetching results...
                </Typography>
              )}

              {!selectedState && (
                <Typography variant="h3" bgcolor="#fff" p={3} borderRadius={2}>
                  Please choose a state and city to search
                </Typography>
              )}
            </Stack>

            <img src={promotionBanner} width={360} height="auto" alt="promotion" />
          </Stack>
        </Container>

        {/* Booking confirmation modal */}
        <AppointmentModal
          open={modalVisible}
          setOpen={setModalVisible}
          bookingDetails={reservationInfo}
          showSuccessMessage={setConfirmationVisible}
        />

        {/* Success notification */}
        <AlertMessage
          open={confirmationVisible}
          setOpen={setConfirmationVisible}
          message="Appointment Confirmed Successfully"
        />
      </Box>
    </>
  );
}
