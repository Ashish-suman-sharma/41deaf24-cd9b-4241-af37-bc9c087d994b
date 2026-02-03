/* Healthcare Portal - Location Filter Component */
import { MenuItem, Select, Button, InputAdornment, Box } from "@mui/material";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Location selector component for filtering medical centers by state and city
export default function CityStateSelector() {
  const [stateOptions, setStateOptions] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);
  const [locationData, setLocationData] = useState({ state: "", city: "" });
  const routeNavigator = useNavigate();

  // Load state options on component mount
  useEffect(() => {
    const loadStateOptions = async () => {
      try {
        const apiResponse = await axios.get(
          "https://meddata-backend.onrender.com/states"
        );
        setStateOptions(apiResponse.data);
      } catch (err) {
        console.error("Failed to load states:", err);
      }
    };

    loadStateOptions();
  }, []);

  // Load city options when state changes
  useEffect(() => {
    const loadCityOptions = async () => {
      setCityOptions([]);
      setLocationData((current) => ({ ...current, city: "" }));
      try {
        const apiResponse = await axios.get(
          `https://meddata-backend.onrender.com/cities/${locationData.state}`
        );
        setCityOptions(apiResponse.data);
      } catch (err) {
        console.error("Failed to load cities:", err);
      }
    };

    if (locationData.state !== "") {
      loadCityOptions();
    }
  }, [locationData.state]);

  // Handle form field updates
  const updateLocationField = (event) => {
    const { name, value } = event.target;
    setLocationData((current) => ({ ...current, [name]: value }));
  };

  // Navigate to search results
  const initiateSearch = (event) => {
    event.preventDefault();
    if (locationData.state && locationData.city) {
      routeNavigator(`/search?state=${locationData.state}&city=${locationData.city}`);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={initiateSearch}
      sx={{
        display: "flex",
        gap: 4,
        justifyContent: "space-between",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      {/* State selector dropdown */}
      <Select
        displayEmpty
        id="state"
        name="state"
        value={locationData.state}
        onChange={updateLocationField}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        required
        sx={{ minWidth: 200, width: "100%" }}
        MenuProps={{ id: "state-menu" }}
      >
        <MenuItem disabled value="">
          State
        </MenuItem>
        {stateOptions.map((stateItem) => (
          <MenuItem key={stateItem} value={stateItem}>
            {stateItem}
          </MenuItem>
        ))}
      </Select>

      {/* City selector dropdown */}
      <Select
        displayEmpty
        id="city"
        name="city"
        value={locationData.city}
        onChange={updateLocationField}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        required
        sx={{ minWidth: 200, width: "100%" }}
        MenuProps={{ id: "city-menu" }}
      >
        <MenuItem disabled value="">
          City
        </MenuItem>
        {cityOptions.map((cityItem) => (
          <MenuItem key={cityItem} value={cityItem}>
            {cityItem}
          </MenuItem>
        ))}
      </Select>

      {/* Search submit button */}
      <Button
        id="searchBtn"
        type="submit"
        variant="contained"
        size="large"
        startIcon={<SearchIcon />}
        sx={{ py: "15px", px: 8, flexShrink: 0 }}
        disableElevation
      >
        Search
      </Button>
    </Box>
  );
}
