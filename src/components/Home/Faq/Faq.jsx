import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import MainTitle from "../../../shared/MainTitle";

const faqs = [
  {
    question: "How can I place an order?",
    answer:
      "Simply browse our products, add items to your cart, and proceed to checkout. You’ll be guided through the payment process.",
  },
  {
    question: "Do you offer cash on delivery?",
    answer:
      "Yes, we provide cash on delivery in most cities. You can check availability during checkout.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Usually 2-5 business days depending on your location. Some remote areas may take longer.",
  },
  {
    question: "Can I return or replace a product?",
    answer:
      "Yes, you can return or request a replacement within 7 days of delivery if the product is damaged or incorrect.",
  },
  {
    question: "Do you offer discounts or promotions?",
    answer:
      "Yes, we frequently run seasonal sales and promotions. Subscribe to our newsletter to stay updated.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "You can reach our customer support team via email, live chat, or phone from 9 AM to 9 PM daily.",
  },
  {
    question: "Can I change my delivery address after ordering?",
    answer:
      "Yes, you can change your delivery address within 6 hours of placing the order by contacting support.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Currently, we only ship within the country. International shipping options will be available soon.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Usually 2-5 business days depending on your location. Some remote areas may take longer.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className=" ">
      <MainTitle text={"Frequently Asked Questions"} />

      <div className="space-y-4 mt-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-xl shadow-sm overflow-hidden bg-gray-900"
          >
            {/* Question */}
            <button
              className="w-full flex justify-between font-primary items-center px-5 py-4 text-left text-lg font-medium text-white"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <motion.span
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </motion.span>
            </button>

            {/* Answer */}
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <SmoothAccordion>{faq.answer}</SmoothAccordion>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}

// Smooth Accordion Component
function SmoothAccordion({ children }) {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.scrollHeight);
    }
  }, [children]);

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height, opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      style={{ overflow: "hidden" }}
    >
      <div ref={ref} className="px-5 pb-4 font-secondary text-gray-400">
        {children}
      </div>
    </motion.div>
  );
}
