import React from "react";

const Divider = () => {
  return (
    <div className="relative flex items-center my-2">
      <div className="flex-grow border-t border-gray-700"></div>
      <span className="mx-3 font-primary text-white font-medium">OR</span>
      <div className="flex-grow border-t border-gray-700"></div>
    </div>
  );
};

export default Divider;
