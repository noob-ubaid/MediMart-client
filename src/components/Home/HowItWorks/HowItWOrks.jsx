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
      <div className="py-8 md:py-12 rounded-2xl bg-gradient-to-b from-gray-900 to-gray-800">
        <div className=" grid md:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
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

// import React from "react";
// import { motion } from "framer-motion";
// import { Search, ShoppingCart, Truck, Star } from "lucide-react";
// import MainTitle from "../../../shared/MainTitle";

// const steps = [
//   {
//     icon: <Search className="w-10 h-10 text-white" />,
//     title: "Search Products",
//     description: "Find medicines and health products quickly and easily.",
//   },
//   {
//     icon: <ShoppingCart className="w-10 h-10 text-white" />,
//     title: "Add to Cart",
//     description: "Select the quantity and add products to your cart.",
//   },
//   {
//     icon: <Truck className="w-10 h-10 text-white" />,
//     title: "Fast Delivery",
//     description: "Get your order delivered to your doorstep quickly.",
//   },
//   {
//     icon: <Star className="w-10 h-10 text-white" />,
//     title: "Enjoy Benefits",
//     description: "Premium members get exclusive discounts & rewards.",
//   },
// ];

// export default function HowItWorksFlow() {
//   return (
//     <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
//       <MainTitle text="How It Works" />

//       <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-12 px-4 max-w-6xl mx-auto relative">
//         {steps.map((step, index) => (
//           <motion.div
//             key={index}
//             className="relative flex flex-col items-center text-center cursor-pointer hover:scale-105 transition-transform duration-300"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: index * 0.2 }}
//           >
//             {/* Step Circle */}
//             <div className="bg-gradient-to-tr from-primary/80 to-primary/60 p-5 rounded-full shadow-lg mb-4">
//               {step.icon}
//             </div>
//             {/* Step Title */}
//             <h3 className="text-white font-primary text-lg font-semibold">
//               {step.title}
//             </h3>
//             {/* Step Description */}
//             <p className="text-gray-300 mt-2 max-w-xs">{step.description}</p>

//             {/* Curved Arrow */}
//             {index < steps.length - 1 && (
//               <div className="hidden md:flex absolute -right-24 top-1/2 transform -translate-y-1/2 items-center">
//                 <svg
//                   className="w-32 h-16 text-white/50"
//                   fill="none"
//                   viewBox="0 0 200 80"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M0,40 C60,40 140,0 200,40"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     fill="transparent"
//                   />
//                   <polygon
//                     points="200,40 190,35 190,45"
//                     fill="currentColor"
//                   />
//                 </svg>
//               </div>
//             )}
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }
