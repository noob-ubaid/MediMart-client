import React from "react";
import Banner from "../../components/Home/Banner/Banner";
import ShopByCategory from "../../components/Home/shopbycategory/ShopByCategory";
import WhyChooseMedimart from "../../components/Home/WhyChooseMedimar/WhyChooseMedimart";
import DiscountSection from "../../components/Home/Discount/Discount";

const Home = () => {
  return (
    <div className=" text-white px-4 2xl:px-0">
    <Banner/>
    <ShopByCategory/>
    <WhyChooseMedimart/>
    <DiscountSection/>
    </div>
  );
};

export default Home;
