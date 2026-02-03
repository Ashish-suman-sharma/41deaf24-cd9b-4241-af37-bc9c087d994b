/* 
 * Application Entry Point
 * Healthcare Portal - Main Configuration
 */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import SearchResults from "./FindCenters/SearchResults";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./HomePage/MainPage";
import { createTheme, ThemeProvider } from "@mui/material";
import UserBookings from "./Appointments/UserBookings";

// Application routing configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "search",
        element: <SearchResults />,
      },
      {
        path: "my-bookings",
        element: <UserBookings />,
      },
      {
        path: "/",
        element: <MainPage />,
      },
    ],
  },
]);

// Custom MUI theme configuration for consistent styling
export const appTheme = createTheme({
  typography: {
    fontFamily: "Poppins , sans-serif",
  },
  palette: {
    primary: {
      main: "#2AA7FF",
      green: "#00A500",
      secondary: "#1B3C74",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
        },
        contained: {
          color: "#fff",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          width: "90%",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          color: "#000000",
          fontSize: "56px",
          fontWeight: "700",
        },
        h2: {
          color: "#1B3C74",
          fontWeight: "600",
          fontSize: "48px",
          lineHeight: 1.2,
        },
        h3: {
          color: "#102851",
          fontSize: "30px",
          fontWeight: "500",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          background: "#FAFBFE",
          borderRadius: "8px",
          color: "#ABB6C7",
          "& .MuiOutlinedInput-notchedOutline, &:hover .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "#F0F0F0",
            },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          background: "#FAFBFE",
          borderRadius: "8px",
          color: "#ABB6C7",
          "& .MuiOutlinedInput-notchedOutline, &:hover .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "#F0F0F0",
            },
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

// Responsive typography adjustments
appTheme.typography.h2 = {
  [appTheme.breakpoints.down("sm")]: {
    fontSize: "32px",
  },
};

appTheme.typography.h1 = {
  [appTheme.breakpoints.down("sm")]: {
    fontSize: "36px",
  },
};

appTheme.typography.h3 = {
  [appTheme.breakpoints.down("sm")]: {
    fontSize: "22px",
  },
};

// Application render initialization
const appRoot = ReactDOM.createRoot(document.getElementById("root"));
appRoot.render(
  <React.StrictMode>
    <ThemeProvider theme={appTheme}>
      <RouterProvider router={appRouter} />
    </ThemeProvider>
  </React.StrictMode>
);
