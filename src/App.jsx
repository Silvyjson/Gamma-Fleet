import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from './js-components/Pages/LandingPage';

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import SignUpPage from "./js-components/Pages/SignUpPage";
import SignInPage from "./js-components/Pages/SignInPage";


library.add(fab, fas, far);

const App = () => {

  const router = createBrowserRouter([
    { path: "/Gamma-Fleet/", element: <LandingPage /> },
    { path: "/Gamma-Fleet/signUp-page", element: <SignUpPage /> },
    { path: "/Gamma-Fleet/signIn-page", element: <SignInPage /> },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App;