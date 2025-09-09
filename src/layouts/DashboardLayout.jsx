"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./Sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import { FaHistory } from "react-icons/fa";
import { motion } from "motion/react";
import { cn } from "../lib/utils";
import { Link, Outlet } from "react-router";
import useAuth from "../hooks/useAuth";
import { FaPlus } from "react-icons/fa";

export function DashboardLayout() {
  const { user } = useAuth();
  const links = [
    {
      label: "Dashboard",
      href: "/",
      icon: (
        <IconBrandTabler className="h-5 w-5 shrink-0 text-neutral-200 dark:text-neutral-200" />
      ),
    },
    {
      label: "Manage Banner",
      href: "/dashboard/manageBanner",
      icon: (
        <IconUserBolt className="h-5 w-5 shrink-0 text-neutral-200 dark:text-neutral-200" />
      ),
    },
    {
      label: "Settings",
      href: "#",
      icon: (
        <IconSettings className="h-5 w-5 shrink-0 text-neutral-200 dark:text-neutral-200" />
      ),
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <IconArrowLeft className="h-5 w-5 shrink-0 text-neutral-200 dark:text-neutral-200" />
      ),
    },
  ];
  const userLink = [
    {
      label: "Payment History",
      href: "/paymentHistory",
      icon: (
        <FaHistory className="h-5 w-5 shrink-0 text-neutral-200 dark:text-neutral-200" />
      ),
    },
  ]
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "mx-auto flex w-full flex-1 flex-col overflow-hidden rounded-md border border-neutral-700 bg-gray-800 md:flex-row dark:border-neutral-700 dark:bg-neutral-800",
        "min-h-screen"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between min-h-[calc(100vh-3px)] gap-10">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
           
            <div className="flex items-center gap-2">
              <img
                    src={user?.photoURL}
                    className="h-8 w-8 shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                  {open && <p className="text-white shrink-0">{user?.displayName}</p>}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard />
    </div>
  );
}
export const Logo = () => {
  return (
    <Link
      to="/"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <p className={` bg-white p-2 rounded-sm`}>
        <FaPlus className="text-black font-bold" />
      </p>
      <span className="font-bold text-white font-primary text-2xl ">
        MediMart
      </span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      to="/"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <p className={` bg-white p-2 rounded-sm`}>
        <FaPlus className="text-black font-bold" />
      </p>
    </Link>
  );
};

// Dummy dashboard component with content
const Dashboard = () => {
  return (
    <div className="flex flex-1">
      <div className="flex h-full w-full flex-1 flex-col gap-2 rounded-tl-2xl border border-neutral-700 bg-black p-2 md:p-10 dark:border-neutral-700 dark:bg-black">
        <Outlet/>
      </div>
    </div>
  );
};
