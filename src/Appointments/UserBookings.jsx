/* Healthcare Portal - User Appointments Page */
import { Box, Typography, Container, Stack } from "@mui/material";
import MedicalCenterCard from "../components/CenterCard/MedicalCenterCard";
import { useEffect, useState } from "react";
import promotionBanner from "../assets/cta.png";
import SearchField from "../components/QueryInput/SearchField";
import TopNav from "../components/Navigation/TopNav";

// Page component displaying user's scheduled appointments
export default function UserBookings() {
  const [appointmentList, setAppointmentList] = useState([]);
  const [displayedAppointments, setDisplayedAppointments] = useState([]);

  // Load appointments from browser storage on mount
  useEffect(() => {
    const storedAppointments = localStorage.getItem("bookings") || "[]";
    setAppointmentList(JSON.parse(storedAppointments));
  }, []);

  // Update displayed list when appointments change
  useEffect(() => {
    setDisplayedAppointments(appointmentList);
  }, [appointmentList]);

  return (
    <>
      <TopNav />
      <Box
        sx={{ background: "linear-gradient(#EFF5FE, rgba(241,247,255,0.47))" }}
      >
        {/* Page header with search functionality */}
        <Box
          mb="50px"
          pt={{ xs: 3, md: 1 }}
          sx={{
            position: "relative",
            background: "linear-gradient(90deg, #2AA7FF, #0C8CE5)",
            borderBottomLeftRadius: "1rem",
            borderBottomRightRadius: "1rem",
          }}
        >
          <Container maxWidth="xl" sx={{ px: { xs: 0, md: 5 } }}>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 0, md: 12 }}
              alignItems={{ xs: "center", md: "flex-end" }}
            >
              <Typography
                component="h1"
                pb={1}
                fontSize={{ xs: 32, md: 40 }}
                fontWeight={700}
                color="#fff"
              >
                My Bookings
              </Typography>
              <Box
                bgcolor="#fff"
                p={3}
                flexGrow={1}
                borderRadius={2}
                boxShadow="0 0 10px rgba(0,0,0,0.1)"
                sx={{ translate: "0 50px" }}
                width={{ xs: 1, md: "auto" }}
              >
                <SearchField list={appointmentList} filterList={setDisplayedAppointments} />
              </Box>
            </Stack>
          </Container>
        </Box>

        {/* Appointments listing */}
        <Container maxWidth="xl" sx={{ pt: 8, pb: 10, px: { xs: 0, md: 4 } }}>
          <Stack alignItems="flex-start" direction={{ md: "row" }}>
            <Stack
              mb={{ xs: 4, md: 0 }}
              spacing={3}
              width={{ xs: 1, md: "calc(100% - 384px)" }}
              mr="24px"
            >
              {displayedAppointments.length > 0 &&
                displayedAppointments.map((appointment) => (
                  <MedicalCenterCard
                    key={appointment["Hospital Name"]}
                    details={appointment}
                    booking={true}
                  />
                ))}

              {displayedAppointments.length === 0 && (
                <Typography variant="h3" bgcolor="#fff" p={3} borderRadius={2}>
                  No Appointments Scheduled Yet!
                </Typography>
              )}
            </Stack>

            <img src={promotionBanner} width={360} height="auto" alt="healthcare promotion" />
          </Stack>
        </Container>
      </Box>
    </>
  );
}
