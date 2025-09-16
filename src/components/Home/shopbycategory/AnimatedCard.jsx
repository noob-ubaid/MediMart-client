import { cn } from "../../../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router";

export const HoverEffect = ({ items = [], className, show }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const displayedItems = show ? items : items.slice(0, 8);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-500",
        className
      )}
    >
      {displayedItems.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ y: 15, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{once:true}}
          transition={{ duration: 0.6, delay: idx * 0.1 }}
          layout
        >
          <Link
            to={`/dashboard`}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-slate-800/[0.8] rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.15 } }}
                  exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                />
              )}
            </AnimatePresence>
            <Card>
              <h1 className="text-2xl font-semibold text-white font-primary">
                {item.title}
              </h1>
              <p className="text-white/60 font-secondary mt-3">{item.description}</p>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-3 overflow-hidden bg-black border border-white/[0.2] group-hover:border-slate-700 relative z-20 transition-all duration-300",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
