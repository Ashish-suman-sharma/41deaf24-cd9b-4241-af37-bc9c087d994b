/* Healthcare Portal - Quick Services Grid */
import { Box, Grid, Typography } from "@mui/material";
import physicianIcon from "../../assets/Doctor.png";
import pharmacyIcon from "../../assets/Drugstore.png";
import facilityIcon from "../../assets/Hospital.png";
import medicineIcon from "../../assets/Capsule.png";
import emergencyIcon from "../../assets/Ambulance.png";
import FeatureCard from "../ServiceTile/FeatureCard";
import { useMemo } from "react";

// Quick access services section on homepage
export default function QuickServices() {
  // Define available service options
  const serviceOptions = useMemo(
    () => [
      { img: physicianIcon, title: "Physicians" },
      { img: pharmacyIcon, title: "Diagnostics" },
      { img: facilityIcon, title: "Medical Centers" },
      { img: medicineIcon, title: "Pharmacy" },
      { img: emergencyIcon, title: "Emergency" },
    ],
    []
  );

  return (
    <Box>
      <Typography
        component="h4"
        fontSize={20}
        color="#102851"
        fontWeight={500}
        textAlign="center"
        mb={2}
      >
        What are you searching for?
      </Typography>
      <Grid
        container
        columnSpacing={{ xs: 1, md: 2 }}
        justifyContent={"center"}
      >
        {serviceOptions.map((serviceItem) => (
          <Grid item key={serviceItem.title} xs={4} md={2.4}>
            <FeatureCard
              img={serviceItem.img}
              title={serviceItem.title}
              active={serviceItem.active || false}
              bgColor="#FAFBFE"
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
