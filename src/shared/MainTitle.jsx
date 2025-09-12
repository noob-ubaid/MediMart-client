import React from "react";
import { motion } from "motion/react";
const MainTitle = ({ text }) => {
  return (
    <motion.p
      initial={{ y: 12, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, stiffness: 300, type: "spring", delay: 0.4 }}
      className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white text-center font-primary my-12 md:my-14 lg:my-16"
    >
      {text}
    </motion.p>
  );
};

export default MainTitle;
