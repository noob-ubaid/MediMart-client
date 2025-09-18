import React from "react";
import { motion } from "framer-motion";
import MainTitle from "../../../shared/MainTitle";
import Button from "../../../shared/Button";

const DiscountSection = () => {
  const discounts = [
    {
      name: "Pain Relief Tablets",
      normalPrice: 300,
      proPrice: 240,
    },
    {
      name: "Vitamin C Boost",
      normalPrice: 200,
      proPrice: 150,
    },
    {
      name: "Heart Care Capsules",
      normalPrice: 500,
      proPrice: 400,
    },
  ];

  return (
    <section>
      <MainTitle text={`Exclusive discount for pro members`} />
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 bg-gradient-to-b from-gray-900 to-gray-800 text-white rounded-3xl px-6 py-12 lg:px-12 lg:py-16 mt-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1 space-y-5"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-primary leading-snug">
            Unlock Savings with{" "}
            <span className="text-primary">Medimart Pro</span>
          </h2>
          <p className="text-white/80 font-secondary text-lg">
            Join our premium membership and enjoy{" "}
            <span className="font-semibold text-primary">
              exclusive discounts
            </span>
            , free delivery, and priority support on every order. With Medimart
            Pro, your health stays affordable and hassle-free.
          </p>
          <Button text={`Become a Pro Member`} link={`/membership`}/>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1 w-full"
        >
          {/* Discount Cards */}
          <div className="grid gap-4">
            {discounts.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="bg-transparent backdrop-blur-2xl p-5 rounded-2xl shadow-lg border border-white/20 flex justify-between items-center"
              >
                <div>
                  <h3 className="font-semibold text-lg font-primary">{item.name}</h3>
                  <p className="text-sm text-white/60 font-secondary">Exclusive Pro Savings</p>
                </div>
                <div className="text-right">
                  <p className="line-through font-primary text-white/50">
                    ${item.normalPrice}
                  </p>
                  <p className="text-yellow-400 font-primary font-bold text-xl">
                    ${item.proPrice}
                  </p>
                  <p className="text-green-400 font-primary text-sm">
                    Save ${item.normalPrice - item.proPrice}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DiscountSection;
