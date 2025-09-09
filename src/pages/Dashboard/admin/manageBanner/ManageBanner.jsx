import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { axiosSecure } from "../../../../hooks/useAxiosSecure";
import Title from "../../../../shared/Title";
import login from "/login.png";
const ManageBanner = () => {
  const [image, setImage] = useState(null);
  const { data: getBanner, isPending } = useQuery({
    queryKey: ["allBanners"],
    queryFn: async () => {
      const res = await axiosSecure.get("/getBanners");
      return res.data;
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  if (isPending) return <h1 className="text-white">loading...</h1>;
  return (
    <div>
      <div className="border-b pb-4 border-gray-700">
        <Title text=" Manage Banner" />
      </div>
      <div className="flex mt-8 md:mt-12 items-center border justify-between gap-10 md:gap-14 flex-col md:flex-row">
        <div className="grid grid-cols-1  flex-1  md:grid-cols-2 gap-8">
          {/* {getBanner.map((banner) => (
            <img src={banner.image} alt="fds" />
          ))} */}
          <img src={login} alt="" />
        </div>
        <div className="flex-1 border border-gray-700 rounded p-6">
          <Title text={`Add Banner`} />
          <form onSubmit={handleSubmit}>
            <input
              onChange={(e) => setImage(e.target.files)}
              required
              className="bg-gray-800 border text-white mt-4 font-secondary border-gray-600 px-4 py-2 rounded w-full"
              type="file"
            />
            <button className="bg-primary text-center text-white font-medium font-secondary py-2 rounded  w-full mt-4">
              Add Banner
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ManageBanner;
