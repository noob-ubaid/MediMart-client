import { cn } from "../../../lib/utils";
import React, { useEffect, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import Rating from "@mui/material/Rating";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "57s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <div
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 ",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <div
            className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-b-0   p-5 md:p-6 md:w-[450px] border-zinc-700 bg-gradient-to-b from-gray-900 to-gray-800"
            key={item.name}
          >
            <div className="flex items-center gap-3 border-b border-white/[0.1] pb-4">
              <img
                className="size-14 rounded-full bg-center object-cover"
                src={item.profile}
                alt=""
              />
              <div>
                <p className="text-white font-primary text-xl font-medium">
                  {item.name}
                </p>
                <Rating
                  name="read-only"
                  value={item.rating}
                  readOnly
                  precision={1}
                  icon={<StarIcon fontSize="inherit" />}
                  emptyIcon={
                    <StarIcon
                      fontSize="inherit"
                      sx={{ color: "rgba(255,255,255,0.3)" }}
                    />
                  }
                  sx={{ color: "#FFD700", fontSize: 24 }}
                />
              </div>
            </div>
            <p className="mt-4 pb-4 border-b border-white/[0.1] font-secondary text-white/80">
              {item.feedback}
            </p>
            <div className="flex items-center mt-4 justify-between gap-2">
              <div>
                <p className="font-primary text-white/80 text-xl font-medium">
                  {dayjs(item.date).fromNow()}
                </p>
              </div>

              <p className="text-green-300 font-primary bg-green-900/40 px-4 py-1 rounded-full text-sm tracking-wide">
                Verified Purchase
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
