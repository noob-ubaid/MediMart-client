import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
import SignUp from "../pages/SignUp/SignUp";
export const router = createBrowserRouter([
  {
    path: "/",
    Component : Home
  },
  {
    path: "/login",
    Component : Login
  },
  {
    path: "/register",
    Component : SignUp
  },
]);
