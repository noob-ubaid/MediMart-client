import React from "react";
import { motion } from "motion/react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router";
const Button = ({ text, item ,link}) => {
  return (
    <motion.div
      variants={item}
      className="inline-block group"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Link
        to={link}
        className="relative inline-flex items-center rounded-full bg-white text-black font-medium py-3 pl-6 pr-8 transition-all duration-300"
      >
        <span className="transition-all duration-300 group-hover:pr-6">
          {text}
        </span>
        <span
          className="absolute right-2 flex items-center justify-center text-black
                 -translate-x-2 opacity-0 transition-all duration-300
                 group-hover:translate-x-0 group-hover:opacity-100"
          aria-hidden="true"
        >
          <FaLongArrowAltRight size={21} />
        </span>
      </Link>
    </motion.div>
  );
};

export default Button;
