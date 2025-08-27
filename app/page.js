"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

import Hero from "./Components/Hero";
import BannerSlider from "./Components/BannerSlider";
import ProductHighlights from "./Components/producthighlights";

export default function Home() {
  const pathname = usePathname();

  // auto-scroll if coming with hash e.g. /#about
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash) {
        const el = document.querySelector(hash);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: "smooth" });
          }, 200); // small delay so DOM is ready
        }
      }
    }
  }, [pathname]);

  return (
    <div>
      {/* Hero (top) */}
      <section id="home">
        <Hero />
      </section>

      {/* About section (example, maybe part of Hero or another component) */}
      <section id="about">
        <BannerSlider />
      </section>

      {/* Products section */}
      <section id="products">
        <ProductHighlights />
      </section>

      {/* Contact section placeholder */}
      <section id="contact" className="min-h-[50vh] flex items-center justify-center bg-gray-100">
        <h2 className="text-3xl font-bold">Contact Us</h2>
      </section>
    </div>
  );
}
