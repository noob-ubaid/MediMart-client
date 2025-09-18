import React from "react";
import { motion } from "framer-motion";
import { Search, ShoppingCart, CreditCard, Package } from "lucide-react";
import MainTitle from "../../../shared/MainTitle";

const steps = [
  {
    icon: <Search className="w-10 h-10 text-white" />,
    title: "Search Products",
    description: "Find medicines and health products quickly and easily.",
  },
  {
    icon: <ShoppingCart className="w-10 h-10 text-white" />,
    title: "Add to Cart",
    description: "Select the quantity and add products to your cart.",
  },
  {
    icon: <CreditCard className="w-12 h-12 text-white" />,
    title: "Confirm Payment",
    description: "Secure and fast checkout with multiple payment options.",
  },
  {
    icon: <Package className="w-12 h-12 text-white" />,
    title: "Get Products",
    description: "Receive your products and enjoy the benefits of your order.",
  },
];

export default function HowItWorks() {
  return (
    <section>
      <MainTitle text="How It Works" />
      <div className="py-6 md:py-12 rounded-2xl bg-gradient-to-b from-gray-900 to-gray-800">
        <div className=" grid md:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="bg-gray-800/40 backdrop-blur-md p-6 rounded-2xl text-center flex flex-col items-center gap-4 hover:scale-105 transition-transform">
                <div className="bg-primary/20 p-4 rounded-full">
                  {step.icon}
                </div>
                <h3 className="text-white font-primary text-xl font-semibold">
                  {step.title}
                </h3>
                <p className="text-white/80 font-secondary text-center">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
