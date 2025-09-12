import React, { useState } from "react";
import MainTitle from "../../../shared/MainTitle";
import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../../../hooks/useAxiosSecure";
import { HoverEffect } from "./AnimatedCard";
const ShopByCategory = () => {
  const [show,setShow] = useState(false)
  const { data: projects, isPending } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await axiosSecure.get("/category");
      return res.data;
    },
  });
  if (isPending) return <p>loading...</p>;
  return (
    <div>
      <MainTitle text={`Shop By Category`} />
      <div>
        <HoverEffect show={show} setShow={setShow} items={projects} />
        <div className="flex items-center justify-center mt-6">
          {!show ? <button onClick={()=> setShow(true)} className="bg-white text-black px-8 py-2 rounded-full font-medium">
            Show All
          </button> : <button onClick={()=> setShow(false)} className="bg-white text-black px-8 py-2 rounded-full font-medium">
            Show Less
          </button>}
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
