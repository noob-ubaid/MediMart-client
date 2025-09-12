import React, { useState } from "react";
import MainTitle from "../../../shared/MainTitle";
import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../../../hooks/useAxiosSecure";
import { HoverEffect } from "./AnimatedCard";
import { motion } from "framer-motion";

const ShopByCategory = () => {
  const [show, setShow] = useState(false);

  const { data: projects = [], isPending } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await axiosSecure.get("/category");
      return res.data;
    },
  });

  if (isPending) return <p>Loading...</p>;

  return (
    <div className="">
      <MainTitle text={`Shop By Category`} />
      <div className="transition-all duration-500">
        <HoverEffect show={show} items={projects} />
        <div className="flex items-center justify-center mt-6">
          <motion.button
            layout
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            onClick={() => setShow(!show)}
            className="bg-white text-black cursor-pointer px-8 py-2 rounded-full font-medium"
          >
            {show ? "Show Less" : "Show All"}
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
