/* Healthcare Portal - Medical Center Card Component */
import centerIcon from "../../assets/hospitalicon.png";
import { Box, Button, Chip, Divider, Stack, Typography } from "@mui/material";
import ratingIcon from "../../assets/thumbsup.png";
import ScheduleCalendar from "../DatePicker/ScheduleCalendar";
import { useState } from "react";
import { format } from "date-fns";

// Card component displaying medical center information and booking options
export default function MedicalCenterCard({
  details,
  availableSlots,
  handleBooking,
  booking = false,
}) {
  const [calendarExpanded, setCalendarExpanded] = useState(false);

  const toggleCalendarView = () => {
    setCalendarExpanded((currentState) => !currentState);
  };

  // Format rating display value
  const getRatingValue = () => {
    const rating = details["Hospital overall rating"];
    return rating === "Not Available" ? 0 : rating;
  };

  return (
    <Box sx={{ borderRadius: 2, bgcolor: "#fff", p: { xs: 2, md: 4 } }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 1, md: 4 }}
        flexWrap={"wrap"}
      >
        {/* Center icon */}
        <Box
          component="img"
          src={centerIcon}
          width={{ xs: 64, md: 130 }}
          height="auto"
          sx={{ flexShrink: 0, alignSelf: "start" }}
          alt="Medical center"
        />
        
        {/* Center details */}
        <Box flex={1}>
          <Typography
            component="h3"
            color="primary.main"
            fontWeight={600}
            fontSize={{ xs: 18, md: 20 }}
            mb={1}
            textTransform="capitalize"
            lineHeight={1}
          >
            {details["Hospital Name"].toLowerCase()}
          </Typography>
          <Typography
            textTransform="capitalize"
            color="#414146"
            fontSize={14}
            fontWeight={700}
          >
            {`${details["City"].toLowerCase()}, ${details["State"]}`}
          </Typography>
          <Typography fontSize={14} mb={1}>
            {details["Hospital Type"]}
          </Typography>
          
          {/* Pricing information */}
          <Stack direction="row" flexWrap="wrap" spacing="4px" mb={2}>
            <Typography
              fontWeight={800}
              textTransform="uppercase"
              color="primary.green"
            >
              Free
            </Typography>
            <Typography
              sx={{ textDecoration: "line-through", color: "#787887" }}
            >
              ₹500
            </Typography>
            <Typography>Consultation charges at facility</Typography>
          </Stack>
          
          <Divider sx={{ borderStyle: "dashed", mb: 2 }} />
          
          {/* Rating badge */}
          <Stack
            direction="row"
            alignItems="center"
            bgcolor="primary.green"
            py="4px"
            px={1}
            borderRadius={1}
            width="fit-content"
            spacing="4px"
          >
            <Box
              component={"img"}
              src={ratingIcon}
              width={{ xs: 16, md: 20 }}
              height={{ xs: 16, md: 20 }}
              alt="Rating"
            />
            <Typography
              fontWeight={700}
              fontSize={{ xs: 14, md: 16 }}
              color="#fff"
              sx={{ opacity: 0.5 }}
            >
              {getRatingValue()}
            </Typography>
          </Stack>
        </Box>

        {/* Action section */}
        <Stack
          justifyContent={booking ? "flex-start" : "flex-end"}
          minWidth="23%"
        >
          {!booking && (
            <>
              <Typography
                textAlign="center"
                color="primary.green"
                fontSize={14}
                fontWeight={500}
                mb={1}
              >
                Appointments Open Today
              </Typography>
              <Button
                variant="contained"
                disableElevation
                onClick={toggleCalendarView}
              >
                {!calendarExpanded
                  ? "Schedule FREE Visit"
                  : "Close Scheduling Panel"}
              </Button>
            </>
          )}

          {/* Booking confirmation chips */}
          {booking && (
            <Stack direction="row" spacing={1} mt={{ xs: 2, md: 0 }}>
              <Chip
                label={details.bookingTime}
                variant="outlined"
                color="primary"
                sx={{
                  borderRadius: 1,
                  fontSize: 14,
                }}
              />
              <Chip
                label={format(new Date(details.bookingDate), "dd MMMM yyyy")}
                variant="outlined"
                color="success"
                sx={{
                  borderRadius: 1,
                  fontSize: 14,
                }}
              />
            </Stack>
          )}
        </Stack>
      </Stack>

      {/* Calendar section */}
      {calendarExpanded && (
        <ScheduleCalendar
          details={details}
          availableSlots={availableSlots}
          handleBooking={handleBooking}
        />
      )}
    </Box>
  );
}
