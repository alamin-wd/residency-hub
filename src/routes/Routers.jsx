import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root/Root";
import Home from "../pages/Home/Home";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import UserProfile from "../pages/UserProfile/UserProfile";
import Agents from "../pages/Agents/Agents";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path:"/",
            element: <Home></Home>,
        },

        {
            path:"/update-profile",
            element: <UpdateProfile></UpdateProfile>,
        },

        {
            path:"/user-profile",
            element: <UserProfile></UserProfile>,
        },

        {
            path:"/agents",
            element: <Agents></Agents>,
        },
      ]
    },
  ]);

export default router;