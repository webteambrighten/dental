import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ambridge Ceramics",
  description:
    "Ambridge Ceramics is a specialist dental laboratory delivering precision-crafted restorations and advanced digital workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#f6f8f7]">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          antialiased
          text-[#1a242f]
          bg-[#f6f8f7]
        `}
      >
        {children}
      </body>
    </html>
  );
}