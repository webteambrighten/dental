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

        {/* ===== MAINTENANCE IMAGE ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <img
            src="/maintenance (1).jpg"
            alt="Site under maintenance"
            className="w-full h-auto shadow-xl"
          />
        </motion.div>

        {/* ===== ALIGERS SVG BELOW ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex justify-center"
        >
          <img
            src="/aligers svg.svg"
            alt="Aligers"
            className="h-14 md:h-16 w-auto max-w-full"
          />
        </motion.div>

        {/* ===== TWO BUTTONS ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* SEND A CASE button */}
          <button
            onClick={() => {
              console.log("Send a case clicked");
            }}
            className="px-8 py-3 rounded-lg bg-white/80 backdrop-blur-sm border border-white/50 shadow-md text-[#254c39] font-semibold text-sm uppercase tracking-wider hover:bg-[#a2d8b2] hover:text-white hover:border-[#254c39] transition-all duration-300 w-full sm:w-auto"
          >
            SEND A CASE
          </button>

          {/* SEND AN EMAIL button */}
          <a
            href="mailto:writer987@gmail.com"
            className="px-8 py-3 rounded-lg bg-white/80 backdrop-blur-sm border border-white/50 shadow-md text-[#254c39] font-semibold text-sm uppercase tracking-wider hover:bg-[#a2d8b2] hover:text-white hover:border-[#254c39] transition-all duration-300 w-full sm:w-auto inline-block text-center"
          >
            SEND AN EMAIL
          </a>
        </motion.div>
      </main>
    </div>
  );
}