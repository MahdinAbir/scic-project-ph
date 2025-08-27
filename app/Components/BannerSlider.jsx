"use client"; // make it a client component

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BannerSlider = () => {
  const slides = [
    {
      title: "Everything You Need, All in One Place",
      subtitle: "From beauty products to home essentials – discover it all on EverCart.",
      bg: "from-[#BEE3F8] via-[#DCEEFB] to-[#E0F2FE]", // pink/baby pink/cream gradient
    },
    {
      title: "Make Your Home Stylish",
      subtitle: "Furniture, decor, and lifestyle products to elevate every corner of your home.",
      bg: "from-[#FFDCDC] via-[#FFE8CD] to-[#FFF2EB]"
,
    },
    {
      title: "Glow Inside & Out",
      subtitle: "Makeup, skincare, and fragrances that make you shine every day.",
      bg: "from-[#FFDCDC] via-[#DA6C6C] to-[#AF3E3E]",
    },
    {
      title: "Latest Trends & Must-Haves",
      subtitle: "Stay ahead with the newest products in fashion, electronics, and more.",
      bg: "from-[#FFE8CD] via-[#FFF2EB] to-[#FFDCDC]",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // slide every 5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  const variants = {
    enter: { opacity: 0, y: 20 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div id="" className="relative  mx-auto max-w-6xl w-full h-80 sm:h-96 md:h-[500px] overflow-hidden rounded-2xl shadow-lg my-6  ">
      <AnimatePresence mode="wait">
        {slides.map(
          (slide, index) =>
            index === current && (
              <motion.div
                key={index}
                className={`absolute inset-0 flex flex-col justify-center items-center text-center text-[#511D43] px-6 md:px-12 bg-gradient-to-r ${slide.bg}`}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-3 drop-shadow-md">
                  {slide.title}
                </h2>
                <p className="text-base md:text-lg">{slide.subtitle}</p>
              </motion.div>
            )
        )}
      </AnimatePresence>

      {/* Dots Navigation */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-transform duration-300 ${
              index === current ? "bg-[#DA6C6C] scale-125" : "bg-[#FFF2EB]"
            } hover:scale-110`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;
