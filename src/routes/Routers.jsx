import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root/Root";
import Home from "../pages/Home/Home";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import UserProfile from "../pages/UserProfile/UserProfile";
import Agents from "../pages/Agents/Agents";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/update-profile",
        element: <UpdateProfile></UpdateProfile>,
      },

      {
        path: "/user-profile",
        element: <UserProfile></UserProfile>,
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
      }
    ]
  },
]);

export default router;