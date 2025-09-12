import React from "react";
import Banner from "../../components/Home/Banner/Banner";
import ShopByCategory from "../../components/Home/shopbycategory/ShopByCategory";
import WhyChooseMedimart from "../../components/Home/WhyChooseMedimar/WhyChooseMedimart";

const Home = () => {
  return (
    <div className="min-h-[5000px] text-white ">
    <Banner/>
    <ShopByCategory/>
    <WhyChooseMedimart/>
    </div>
  );
};

export default Home;
