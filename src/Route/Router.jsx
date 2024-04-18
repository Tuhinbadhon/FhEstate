import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import PrivateRoutes from "../PrivetRoutes/PrivetRoutes";
import Profile from "../Pages/Profile/Profile";
import PrivateRoutes2 from "../PrivetRoutes/PrivetRoutes2";
import ErrorPage from "../components/Error/ErrorPage";
import PlotDetails from "../Pages/Home/plots/PlotDetails";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";
import Appointment from "../Pages/Appointment/Appointment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        // loader:()=>fetch('/estatesData.json')
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: (
          <PrivateRoutes2>
            <Registration></Registration>
          </PrivateRoutes2>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile />
          </PrivateRoutes>
        ),
      },
      {
        path: "/updateprofile",
        element: (
          <PrivateRoutes>
            <UpdateProfile />
          </PrivateRoutes>
        ),
      },

      {
        path: "/property/:id",
        element: (
          <PrivateRoutes>
            <PlotDetails />
          </PrivateRoutes>
        ),
        loader: () =>
          fetch(
            "https://tuhinbadhon.github.io/Assignmentdatajson/estatesData.json"
          ),
      },

      {
        path: "/agent/:id",
        element: (
          <PrivateRoutes>
            <Appointment />{" "}
          </PrivateRoutes>
        ),
      },
      {
        path: "/appointment/:id",
        element: (
          <PrivateRoutes>
            <Appointment />{" "}
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
