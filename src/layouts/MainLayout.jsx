import React from "react";
import NavbarDemo from "../components/Navbar/Navbar";
import { Outlet } from "react-router";
import { GridBackgroundDemo } from "../components/backgroundColor/Background";

const MainLayout = () => {
  return (
    <>
      <GridBackgroundDemo>
        <div className="">
          <NavbarDemo />
          <div className="max-w-[1500px] mx-auto px-4 lg:px-0">
            <Outlet />
          </div>
        </div>
      </GridBackgroundDemo>
    </>
  );
};

export default MainLayout;
