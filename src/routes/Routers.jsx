import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root/Root";
import Home from "../pages/Home/Home";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import UserProfile from "../pages/UserProfile/UserProfile";
import Agents from "../pages/Agents/Agents";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NotFound from "../components/NotFound/NotFound";
import PrivateRoute from "./PrivateRoute";
import EstateDetails from "../pages/EstateDetails/EstateDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader : () => fetch('/estates.json'),
      },

      {
        path: "/update-profile",
        element: <UpdateProfile></UpdateProfile>,
      },

      {
        path: "/user-profile",
        element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>,
      },

      {
        path: "/agents",
        element: <Agents></Agents>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },

      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/estate/:id",
        element: <EstateDetails></EstateDetails>,
        loader: () => fetch('/estates.json'),
      }
    ]
  },
]);

export default router;