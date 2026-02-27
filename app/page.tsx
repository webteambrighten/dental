"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {
  /** Pass your SVG logo or image */
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
          {logo ? (
            <div className="h-16 flex items-center justify-center">
              
            </div>
          ) : (
            <div className="text-center">
              <div className="text-3xl font-semibold tracking-wide text-[#1a242f]">
                ambridge
              </div>
              <div className="text-xs uppercase tracking-[0.35em] text-[#A2D8B2] mt-1">
                ceramics
              </div>
            </div>
          )}
        </motion.div>

        {/* ===== HEADING ===== */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="text-[40px] md:text-[52px] font-light text-[#1a242f] leading-[1.15] mb-6"
        >
          Our new website is
          <span className="block font-semibold text-[#2d5a43] mt-2">
            coming soon
          </span>
        </motion.h1>

      </main>
    </div>
  );
}