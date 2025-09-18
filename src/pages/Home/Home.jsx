import React from "react";
import Banner from "../../components/Home/Banner/Banner";
import ShopByCategory from "../../components/Home/shopbycategory/ShopByCategory";
import WhyChooseMedimart from "../../components/Home/WhyChooseMedimar/WhyChooseMedimart";
import DiscountSection from "../../components/Home/Discount/Discount";
import ShareThoughts from "../../components/Home/shareYourThoughts/ShareThoughts";
import CustomerReview from "../../components/Home/CustomerReview/CustomerReview";
import FAQSection from "../../components/Home/Faq/Faq";
import HowItWorks from "../../components/Home/HowItWorks/HowItWOrks";

const Home = () => {
  return (
    <div className=" px-4 2xl:px-0">
      <Banner />
      <HowItWorks/>
      <ShopByCategory />
      <WhyChooseMedimart />
      <DiscountSection />
      <CustomerReview/>
      <ShareThoughts/>
      <FAQSection/>
    </div>
  );
};

export default Home;
