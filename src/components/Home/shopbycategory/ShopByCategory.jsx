import React from "react";
import MainTitle from "../../../shared/MainTitle";
import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../../../hooks/useAxiosSecure";
import { HoverEffect } from "./AnimatedCard";
const ShopByCategory = () => {
    const {data:projects,isPending} = useQuery({
      queryKey : ['category'],
      queryFn : async()=> {
        const res = await axiosSecure.get('/category')
        return res.data
      }
    })
  return (
    <div>
      <MainTitle text={`Shop By Category`} />
      <div>
        <HoverEffect items={projects} />
      </div>
    </div>
  );
};

export default ShopByCategory;
