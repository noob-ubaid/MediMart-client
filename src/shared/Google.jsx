import React from "react";
import { FcGoogle } from "react-icons/fc";
const Google = () => {
  return (
    <button className="flex items-center justify-center mb-1 py-1.5 rounded gap-2 w-full border border-gray-300 text-center">
      <FcGoogle size={22} />
      <span className="font-primary font-bold ">
        Login With Google
      </span>
    </button>
  );
};

export default Google;
