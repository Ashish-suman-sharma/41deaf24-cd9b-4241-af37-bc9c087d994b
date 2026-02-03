/* Healthcare Portal - Search Input Field */
import { Stack, TextField, Button } from "@mui/material";
import { useState, useMemo } from "react";
import SearchIcon from "@mui/icons-material/Search";

// Search component for filtering appointments by hospital name
export default function SearchField({ list, filterList }) {
  const [searchQuery, setSearchQuery] = useState("");

  // Compute filtered results based on search input
  const matchingItems = useMemo(() => {
    const trimmedQuery = searchQuery.trim();
    if (!trimmedQuery) return list;
    
    return list.filter((item) =>
      item["Hospital Name"]
        .toLowerCase()
        .includes(trimmedQuery.toLowerCase())
    );
  }, [searchQuery, list]);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    filterList(matchingItems);
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <Stack direction="row" spacing={2}>
        <TextField
          type="text"
          label="Search By Medical Center"
          variant="outlined"
          fullWidth
          value={searchQuery}
          onChange={handleInputChange}
          inputProps={{ maxLength: 100 }}
        />
        <Button
          type="submit"
          variant="contained"
          size="large"
          startIcon={<SearchIcon />}
          sx={{ py: "15px", px: 8, flexShrink: 0 }}
          disableElevation
        >
          Find
        </Button>
      </Stack>
    </form>
  );
}
