/* Healthcare Portal - Top Navigation Component */
import {
  Box,
  Container,
  Button,
  Stack,
  Typography,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import brandLogo from "../../assets/logo.png";
import navStyles from "./TopNav.module.css";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

// Main navigation header component with mobile responsive menu
export default function TopNav() {
  const isMobileView = useMediaQuery("(max-width:900px)");
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  const toggleMobileMenu = (isOpen) => {
    setMobileMenuActive(isOpen);
  };

  return (
    <header>
      {/* Top announcement bar */}
      <Box p={1} bgcolor="primary.main">
        <Typography fontSize={14} textAlign="center" color="#fff">
          The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.
        </Typography>
      </Box>

      <Container maxWidth="xl">
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
          py={2}
        >
          {/* Brand logo */}
          <Link to="/">
            <img src={brandLogo} alt="Healthcare Portal" height={27} />
          </Link>

          {/* Navigation links */}
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={4}
            alignItems={{ xs: "flex-start", md: "center" }}
            className={[navStyles.navigationMenu, mobileMenuActive && navStyles.menuActive]}
            pt={{ xs: 12, md: 1 }}
            pb={{ xs: 4, md: 1 }}
            px={{ xs: 4, md: 0 }}
          >
            <Link>Find Doctors</Link>
            <Link to="/search">Hospitals</Link>
            <Link>Medicines</Link>
            <Link>Surgeries</Link>
            <Link>Software Provider</Link>
            <Link>Facilites</Link>
            <Link to="/my-bookings">
              <Button variant="contained" disableElevation>
                My Appointments
              </Button>
            </Link>

            {/* Mobile close button */}
            {isMobileView && (
              <IconButton
                onClick={() => toggleMobileMenu(false)}
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 32,
                  color: "#fff",
                }}
              >
                <CloseIcon />
              </IconButton>
            )}
          </Stack>

          {/* Mobile menu toggle */}
          {isMobileView && (
            <IconButton onClick={() => toggleMobileMenu(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Stack>
      </Container>
    </header>
  );
}
