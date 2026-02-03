/* Healthcare Portal - Time Slot Selection Component */
import { Chip, Stack, Typography, Divider } from "@mui/material";

// Time slot picker organized by morning, afternoon, and evening
export default function TimeSelector({
  availableSlots,
  details,
  handleBooking,
  selectedDate,
}) {
  // Custom styled chip component for time slots
  const SlotChip = ({ label, onSelect }) => (
    <Chip
      label={label}
      color="primary"
      variant="outlined"
      sx={{
        borderRadius: "5px",
        fontSize: { xs: 10, md: 14 },
        cursor: "pointer",
        "&:nth-of-type(1)": {
          ml: 0,
        },
        mr: { xs: 1, md: 3 },
        mt: { xs: 1, md: 0 },
      }}
      onClick={onSelect}
    />
  );

  // Handle slot selection
  const selectTimeSlot = (timeSlot) => {
    handleBooking({ 
      ...details, 
      bookingDate: selectedDate, 
      bookingTime: timeSlot 
    });
  };

  return (
    <Stack
      pt={3}
      spacing={{ xs: 2, md: 3 }}
      divider={<Divider orientation="horizontal" flexItem />}
    >
      {/* Morning slots */}
      {availableSlots.morning.length > 0 && (
        <Stack
          direction="row"
          alignItems="center"
          px={{ xs: 0, md: 6 }}
          flexWrap={"wrap"}
        >
          <Typography
            width={{ xs: 1, md: "15%" }}
            fontSize={{ xs: 14, md: 16 }}
          >
            Morning
          </Typography>
          {availableSlots.morning.map((timeSlot) => (
            <SlotChip
              key={timeSlot}
              label={timeSlot}
              onSelect={() => selectTimeSlot(timeSlot)}
            />
          ))}
        </Stack>
      )}
      
      {/* Afternoon slots */}
      {availableSlots.afternoon.length > 0 && (
        <Stack
          direction="row"
          alignItems="center"
          px={{ xs: 0, md: 6 }}
          flexWrap={"wrap"}
        >
          <Typography
            width={{ xs: 1, md: "15%" }}
            fontSize={{ xs: 14, md: 16 }}
          >
            Afternoon
          </Typography>
          {availableSlots.afternoon.map((timeSlot) => (
            <SlotChip
              key={timeSlot}
              label={timeSlot}
              onSelect={() => selectTimeSlot(timeSlot)}
            />
          ))}
        </Stack>
      )}
      
      {/* Evening slots */}
      {availableSlots.evening.length > 0 && (
        <Stack
          direction="row"
          alignItems="center"
          px={{ xs: 0, md: 6 }}
          flexWrap={"wrap"}
        >
          <Typography
            width={{ xs: 1, md: "15%" }}
            fontSize={{ xs: 14, md: 16 }}
          >
            Evening
          </Typography>
          {availableSlots.evening.map((timeSlot) => (
            <SlotChip
              key={timeSlot}
              label={timeSlot}
              onSelect={() => selectTimeSlot(timeSlot)}
            />
          ))}
        </Stack>
      )}
    </Stack>
  );
}
