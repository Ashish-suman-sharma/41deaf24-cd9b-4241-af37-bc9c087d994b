/* Healthcare Portal - Appointment Confirmation Modal */
import {
  Modal,
  Typography,
  Box,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import { useState } from "react";
import { format } from "date-fns";

// Modal dialog for confirming appointment bookings
export default function AppointmentModal({
  setOpen,
  open,
  bookingDetails,
  showSuccessMessage,
}) {
  const [userEmail, setUserEmail] = useState("");

  // Process booking confirmation
  const confirmAppointment = (event) => {
    event.preventDefault();
    trackBookingEvent();

    // Retrieve existing bookings from storage
    const existingBookings = localStorage.getItem("bookings") || "[]";
    const previousBookings = JSON.parse(existingBookings);

    // Save new booking
    localStorage.setItem(
      "bookings",
      JSON.stringify([
        ...previousBookings,
        { ...bookingDetails, bookingEmail: userEmail },
      ])
    );
    
    showSuccessMessage(true);
    setUserEmail("");
    setOpen(false);
  };

  // Analytics tracking function
  const trackBookingEvent = () => {
    window.dataLayer = window.dataLayer || [];

    const pushAnalyticsEvent = () => {
      window.dataLayer.push({
        event: "appointment_booked",
        eventTimestamp: new Date().toISOString(),
      });
    };

    pushAnalyticsEvent();
  };

  // Format date for display
  const formatDisplayDate = (dateValue) => {
    if (!dateValue) return null;
    const dateObj = new Date(dateValue);
    return format(dateObj, "E, d LLL");
  };

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Box
        sx={{
          width: "95%",
          maxWidth: 600,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          boxShadow: 24,
          p: { xs: 3, md: 4 },
          outline: 0,
          bgcolor: "#fff",
          borderRadius: 2,
        }}
      >
        <Typography component="h3" variant="h3">
          Confirm Your Appointment
        </Typography>
        <Typography fontSize={14} mb={3}>
          <Box component="span">
            Please provide your email address to finalize the appointment for{" "}
          </Box>
          <Box component="span" fontWeight={600}>
            {`${bookingDetails.bookingTime} on ${formatDisplayDate(
              bookingDetails.bookingDate
            )}`}
          </Box>
        </Typography>
        
        <form onSubmit={confirmAppointment}>
          <Stack alignItems="flex-start" spacing={2}>
            <TextField
              type="email"
              label="Your Email Address"
              variant="outlined"
              fullWidth
              required
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <Stack direction="row" spacing={1}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                disableElevation
              >
                Confirm Appointment
              </Button>
              <Button
                variant="outlined"
                size="large"
                disableElevation
                onClick={() => setOpen(false)}
              >
                Go Back
              </Button>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
}
