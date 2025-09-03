import React from "react";

const Divider = () => {
  return (
    <div className="relative flex items-center my-2">
      <div className="flex-grow border-t border-gray-300"></div>
      <span className="mx-4 font-primary font-medium">OR</span>
      <div className="flex-grow border-t border-gray-300"></div>
    </div>
  );
};

export default Divider;
