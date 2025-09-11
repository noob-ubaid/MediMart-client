import React from "react";
import banner from "/banner.png";
import { TextGenerateEffect } from "./TextGenerate";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FlipWords } from "./FLipWords";

const words = `At Medimart, we believe healthcare should be accessible to everyone. That’s why we’ve built a platform where you can easily find prescription medicines, wellness products, and health supplements from verified vendors. With user-friendly navigation, secure payments, and reliable delivery, we’re simplifying the way you care for your health.`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.4 }, 
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Banner = () => {
  const flipWords = ["Doorstep", "Home", "Family", "Care", "Wellness", "Health"];
  return (
    <div className="flex items-center flex-col-reverse lg:flex-row gap-10 md:gap-14 mt-6 md:mt-12 lg:mt-20">
      {/* Left content */}
      <motion.div
        className="flex-1 space-y-4 md:space-y-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Title */}
        <motion.h1
          variants={item}
          className="text-3xl font-bold font-primary md:text-4xl lg:text-5xl"
        >
          Medicines Delivered <br /> to Your  <FlipWords words={flipWords} />
        </motion.h1>

        {/* Description */}
        <motion.div variants={item}>
          <TextGenerateEffect words={words} />
        </motion.div>

        {/* Button */}
        <motion.div
          variants={item}
          className="inline-block group"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Link
            to="/shop"
            className="relative inline-flex items-center rounded-full bg-white text-black font-medium py-3 pl-6 pr-8 transition-all duration-300"
          >
            <span className="transition-all duration-300 group-hover:pr-6">
              Explore Products
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
      </motion.div>

      {/* Right image */}
      <div className="flex-1">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }} 
          className="rounded-md"
          src={banner}
          alt="banner image"
        />
      </div>
    </div>
  );
};

export default Banner;
