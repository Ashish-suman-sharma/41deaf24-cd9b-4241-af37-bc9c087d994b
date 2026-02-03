/* Healthcare Portal - Schedule Calendar Component */
import DayChooser from "./DateNavigator/DayChooser";
import { Box } from "@mui/material";
import { useState } from "react";
import { startOfDay } from "date-fns";
import TimeSelector from "./SlotSelector/TimeSelector";

// Calendar component for selecting appointment date and time
export default function ScheduleCalendar({ availableSlots, details, handleBooking }) {
  const [chosenDate, setChosenDate] = useState(startOfDay(new Date()));

  // Calculate total available slots
  const computeTotalSlots = () => {
    return (
      availableSlots.morning.length +
      availableSlots.afternoon.length +
      availableSlots.evening.length
    );
  };

  return (
    <Box>
      <DayChooser
        selectedDate={chosenDate}
        setSelectedDate={setChosenDate}
        totalSlots={computeTotalSlots()}
      />
      <TimeSelector
        availableSlots={availableSlots}
        selectedDate={chosenDate}
        details={details}
        handleBooking={handleBooking}
      />
    </Box>
  );
}
