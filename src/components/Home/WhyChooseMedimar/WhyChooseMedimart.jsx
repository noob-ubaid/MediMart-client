import React from "react";
import {
  FaPills,
  FaShieldAlt,
  FaTags,
  FaShippingFast,
  FaHeadset,
  FaStar,
} from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import MainTitle from "../../../shared/MainTitle";
import { HoverEffect } from "./CardHover";
import CountUp from "react-countup";
const whyChooseData = [
  {
    id: 1,
    title: "Wide Range of Medicines",
    description:
      "From prescription drugs to wellness products, find everything in one place with multiple vendor options.",
    icon: <FaPills className="text-3xl text-blue-500" />,
  },
  {
    id: 2,
    title: "Authenticity Guaranteed",
    description:
      "100% genuine medicines sourced from trusted pharmacies and verified vendors.",
    icon: <FaShieldAlt className="text-3xl text-green-500" />,
  },
  {
    id: 3,
    title: "Affordable Prices",
    description:
      "Best deals from multiple sellers – compare and save with exclusive discounts and coupons.",
    icon: <FaTags className="text-3xl text-yellow-500" />,
  },
  {
    id: 4,
    title: "Fast & Reliable Delivery",
    description:
      "Get your medicines delivered safely, quickly, and on time at your doorstep.",
    icon: <FaShippingFast className="text-3xl text-purple-500" />,
  },
  {
    id: 5,
    title: "24/7 Expert Support",
    description:
      "Dedicated customer support and pharmacist assistance whenever you need help.",
    icon: <FaHeadset className="text-3xl text-red-500" />,
  },
  {
    id: 6,
    title: "Best Quality Products",
    description:
      "We ensure only top-quality, carefully checked, and trusted medicines and healthcare products safely reach you.",
    icon: <FaStar className="text-3xl text-orange-500" />,
  },
];
const WhyChooseMedimart = () => {
  return (
    <div>
      <MainTitle text={`Why Choose MediMart`} />
      <div>
        <HoverEffect items={whyChooseData} />
      </div>
      <div className="bg-black py-6 grid grid-cols-2 md:grid-cols-4 gap-8 border border-white/[0.2] justify-items-center rounded-2xl mt-6 md:mt-8 text-white">
        <div className="text-xl md:text-2xl text-center font-semibold">
          <CountUp start={0} end={1000} duration={1.8} />+
          <p className="font-medium text-center text-lg md:text-xl mt-1 font-secondary text-white/60">Happy Customers</p>
        </div>
        <div className="text-xl md:text-2xl text-center font-semibold">
          <CountUp start={0} end={64} duration={1.4} />
          <p className="font-medium text-center text-lg md:text-xl mt-1 font-secondary text-white/60">Districts Covered</p>
        </div>
        <div className="text-xl md:text-2xl text-center font-semibold">
          <CountUp start={0} end={24} duration={1.7} />/<CountUp start={0} end={7} duration={1.7} />
          <p className="font-medium text-center text-lg md:text-xl mt-1 font-secondary text-white/60">Support Availability</p>
        </div>
        <div className="text-xl md:text-2xl text-center font-semibold">
          <CountUp start={0} end={98} duration={1.7} />%
          <p className="font-medium text-center text-lg md:text-xlmt-1 font-secondary text-white/60">Satisfaction Rate</p>
        </div>
       
      </div>
    </div>
  );
};

export default WhyChooseMedimart;
