/* Healthcare Portal - Main Application Component */
import { Outlet } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import SiteFooter from "./components/PageFooter/SiteFooter";
import GetApp from "./components/Sections/MobileApp/GetApp";

function App() {
  // Main layout wrapper containing navigation outlet and persistent components
  return (
    <div className="healthcare-app">
      <CssBaseline />
      <Outlet />
      <GetApp />
      <SiteFooter />
    </div>
  );
}

export default App;
