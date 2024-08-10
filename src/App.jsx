import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './js-components/Pages/LandingPage';
import SignUpPage from "./js-components/Pages/SignUpPage";
import SignInPage from "./js-components/Pages/SignInPage";
import HomePageLAyout from "./js-components/Home-page-components/components/HomePageLAyout";
import DashboardPage from "./js-components/Pages/Home-pages/DashboardPage";
import VehiclePage from "./js-components/Pages/Home-pages/VehiclePage";
import DriverPage from "./js-components/Pages/Home-pages/DriverPage";
import LiveTrackPage from "./js-components/Pages/Home-pages/LiveTrackPage";
import FillUpPage from "./js-components/Pages/Home-pages/FillUpPage";
import MaintenancePage from "./js-components/Pages/Home-pages/MaintenancePage";
import UserManagementPage from "./js-components/Pages/Home-pages/UserManagementPage";
import ReportPage from "./js-components/Pages/Home-pages/ReportPage";
import TripsPage from "./js-components/Pages/Home-pages/TripsPage";
import SettingsPage from "./js-components/Pages/Home-pages/SettingsPage";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fab, fas, far);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Gamma-Fleet/" element={<LandingPage />} />
        <Route path="/Gamma-Fleet/signUp-page" element={<SignUpPage />} />
        <Route path="/Gamma-Fleet/signIn-page" element={<SignInPage />} />
        <Route element={<HomePageLAyout />}>
          <Route path="/Gamma-Fleet/dashboard-page" element={<DashboardPage />} />
          <Route path="/Gamma-Fleet/vehicle-page" element={<VehiclePage />} />
          <Route path="/Gamma-Fleet/driver-page" element={<DriverPage />} />
          <Route path="/Gamma-Fleet/liveTrack-page" element={<LiveTrackPage />} />
          <Route path="/Gamma-Fleet/fillUp-page" element={<FillUpPage />} />
          <Route path="/Gamma-Fleet/maintenance-page" element={<MaintenancePage />} />
          <Route path="/Gamma-Fleet/user-management-page" element={<UserManagementPage />} />
          <Route path="/Gamma-Fleet/report-page" element={<ReportPage />} />
          <Route path="/Gamma-Fleet/trips-page" element={<TripsPage />} />
          <Route path="/Gamma-Fleet/settings-page" element={<SettingsPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
