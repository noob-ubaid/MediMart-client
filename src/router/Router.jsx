import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
import SignUp from "../pages/SignUp/SignUp";
import MainLayout from "../layouts/MainLayout";
import PrivateRoute from "../contexts/PrivateRoute";
import {DashboardLayout} from "../layouts/DashboardLayout";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: SignUp,
  },
]);
