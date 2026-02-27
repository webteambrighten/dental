"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {
  
  logo?: React.ReactNode;
};

export default function ComingSoon({ logo }: Props) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#f6f8f7] px-6">
      {/* ===== SOFT BACKGROUND GLOW ===== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#A2D8B2]/20 rounded-full blur-[120px]" />
      </div>

      <main className="relative max-w-xl w-full text-center">
        {/* ===== LOGO ===== */}
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="mb-12 flex justify-center"
>
  <img
    src="/LOGO SVG.svg"
    alt="Ambridge Ceramics"
    className="h-14 md:h-16 w-auto"
  />
</motion.div>
        {/* ===== PREMIUM HEADING ===== */}
{/* ===== PREMIUM HEADING ===== */}
<motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
  className="
    text-[44px] md:text-[60px]
    leading-[1.05]
    tracking-[-0.02em]
    text-[#1f2933]
    mb-6
  "
>
  <span className="block text-[0.42em] font-medium tracking-[0.18em] uppercase text-[#7a8680] mb-3">
    Our new website is
  </span>

  <span className="relative inline-block font-semibold text-[#254c39]">
    Coming Soon

    {/* premium underline */}
    <span className="absolute left-1/2 -translate-x-1/2 -bottom-3 h-[2px] w-[72%] bg-[#254c39]/25 rounded-full" />
  </span>
</motion.h1>

      </main>
    </div>
  );
}