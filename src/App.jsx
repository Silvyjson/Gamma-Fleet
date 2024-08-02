import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from './js-components/Pages/LandingPage';

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import SignUpPage from "./js-components/Pages/SignUpPage";
import SignInPage from "./js-components/Pages/SignInPage";
import DashboardPage from "./js-components/Pages/Home-pages/DashboardPage";
import VehiclePage from "./js-components/Pages/Home-pages/VehiclePage";
import DriverPage from "./js-components/Pages/Home-pages/DriverPage";
import FillUpPage from "./js-components/Pages/Home-pages/FillUpPage";
import MaintenancePage from "./js-components/Pages/Home-pages/MaintenancePage";
import UserManagementPage from "./js-components/Pages/Home-pages/UserManagementPage";
import ReportPage from "./js-components/Pages/Home-pages/ReportPage";
import TripsPage from "./js-components/Pages/Home-pages/TripsPage";
import SettingsPage from "./js-components/Pages/Home-pages/SettingsPage";


library.add(fab, fas, far);

const App = () => {

  const router = createBrowserRouter([
    { path: "/Gamma-Fleet/", element: <LandingPage /> },
    { path: "/Gamma-Fleet/signUp-page", element: <SignUpPage /> },
    { path: "/Gamma-Fleet/signIn-page", element: <SignInPage /> },
    { path: "/Gamma-Fleet/dashboard-page", element: <DashboardPage /> },
    { path: "/Gamma-Fleet/vehicle-page", element: <VehiclePage /> },
    { path: "/Gamma-Fleet/driver-page", element: <DriverPage /> },
    { path: "/Gamma-Fleet/fillUp-page", element: <FillUpPage /> },
    { path: "/Gamma-Fleet/maintenance-page", element: <MaintenancePage /> },
    { path: "/Gamma-Fleet/user-management-page", element: <UserManagementPage /> },
    { path: "/Gamma-Fleet/report-page", element: <ReportPage /> },
    { path: "/Gamma-Fleet/trips-page", element: <TripsPage /> },
    { path: "/Gamma-Fleet/settings-page", element: <SettingsPage /> },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App;