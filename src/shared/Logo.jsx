import React from "react";
import { Link } from "react-router";
import { FaPlus } from "react-icons/fa";

const Logo = () => {
  return (
    <Link
      to={`/`}
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1  font-normal text-black"
    >
      <p className="bg-black p-2 rounded-sm">
        <FaPlus className="text-white font-bold" />
      </p>
      <span className="font-bold text-black font-primary text-2xl dark:text-black">
        MediMart
      </span>
    </Link>
  );
};

export default Logo;
