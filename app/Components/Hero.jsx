"use client";

import Image from "next/image";
import bgimage from "@/public/8998057.jpg";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center  text-center">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={bgimage}
          alt="Hero Background"
          fill
          priority
          className="object-cover"
        />
        {/* Overlay for pink tint */}
        <div className="absolute inset-0 bg-pink-200/50 mix-blend-multiply"></div>
      </div>

      {/* Content */}
      <div className="px-6 md:px-12 lg:px-20 text-white max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
          Welcome to <span className="text-pink-400">Our Store</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 drop-shadow-md text-pink-50">
          Discover amazing products with style, comfort, and elegance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full shadow-lg transition">
            Explore Products
          </button>
          <button className="px-6 py-3 bg-pink-200 hover:bg-pink-300 text-pink-900 font-semibold rounded-full shadow-lg transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
