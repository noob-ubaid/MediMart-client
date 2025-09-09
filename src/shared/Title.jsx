import React from "react";

const Title = ({ text }) => {
  return (
    <p className="text-center  text-2xl md:text-3xl font-semibold lg:text-4xl text-white">
      {text}
    </p>
  );
};

export default Title;
