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
        <Route path="/" element={<LandingPage />} />
        <Route path="/signUp-page" element={<SignUpPage />} />
        <Route path="/signIn-page" element={<SignInPage />} />
        <Route element={<HomePageLAyout />}>
          <Route path="/dashboard-page" element={<DashboardPage />} />
          <Route path="/vehicle-page" element={<VehiclePage />} />
          <Route path="/driver-page" element={<DriverPage />} />
          <Route path="/liveTrack-page" element={<LiveTrackPage />} />
          <Route path="/fillUp-page" element={<FillUpPage />} />
          <Route path="/maintenance-page" element={<MaintenancePage />} />
          <Route path="/user-management-page" element={<UserManagementPage />} />
          <Route path="/report-page" element={<ReportPage />} />
          <Route path="/trips-page" element={<TripsPage />} />
          <Route path="/settings-page" element={<SettingsPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
