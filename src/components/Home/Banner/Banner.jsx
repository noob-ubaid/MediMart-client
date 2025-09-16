import React from "react";
import banner from "/banner.png";
import { TextGenerateEffect } from "./TextGenerate";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { FlipWords } from "./FLipWords";
import Button from "../../../shared/Button";

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
  const flipWords = [
    "Doorstep",
    "Home",
    "Family",
    "Care",
    "Wellness",
    "Health",
  ];
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
          className="text-3xl font-bold font-primary text-white md:text-4xl lg:text-5xl"
        >
          Medicines Delivered <br /> to Your <FlipWords words={flipWords} />
        </motion.h1>

        {/* Description */}
        <motion.div variants={item}>
          <TextGenerateEffect words={words} />
        </motion.div>

        {/* Button */}
       <Button item={item} text={`Explore Products`} link={`/shop`}/>
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
