import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
export const router = createBrowserRouter([
  {
    path: "/",
    Component : Home
  },
  {
    path: "/login",
    Component : Login
  },
]);
