import React from "react";
import NavbarDemo from "../components/Navbar/Navbar";
import { Outlet } from "react-router";
import { GridBackgroundDemo } from "../components/backgroundColor/Background";

const MainLayout = () => {
  return (
    <>
      <GridBackgroundDemo>
          <NavbarDemo />
          <div className="max-w-[1500px] mx-auto">
            <Outlet />
          </div>
      </GridBackgroundDemo>
    </>
  );
};

export default MainLayout;
