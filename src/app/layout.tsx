import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Headers from "../../Components/Headers";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shohjahon Muhammadiyev",
  description: "Best Coders Group",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-[1440px] max-w-full mx-auto">
          <Headers />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
