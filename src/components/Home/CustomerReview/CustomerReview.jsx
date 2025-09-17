import React from "react";
import { InfiniteMovingCards } from "./MovingCard";
import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../../../hooks/useAxiosSecure";
import MainTitle from "../../../shared/MainTitle";

const CustomerReview = () => {
    const {data:reviews,isPending}=useQuery({
        queryKey : ['reviews'],
        queryFn:async() =>{
            const res = await axiosSecure('/allReviews')
            return res.data
        }

    })
if(isPending) return <p>loading...</p>
  return (
    <div>
      <MainTitle text={`What People Think About Us`}/>
      <div className=" rounded-md flex flex-col antialiased  dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={reviews}
          direction="right"
          speed="normal"
        />
      </div>
    </div>
  );
};

export default CustomerReview;
