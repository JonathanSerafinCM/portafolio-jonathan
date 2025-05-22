'use client';

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Chatbot from "@/components/Chatbot";
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="es">
      <head>
        <title>Portafolio de Jonathan Serafín</title>
        <meta name="description" content="Portafolio profesional de Jonathan Serafín Contreras Malfavón, Desarrollador Full-Stack." />
      </head>
      <body className={`${inter.className} bg-gray-100`}>
        <Navbar />
        <Chatbot />
        <AnimatePresence mode="wait">
          <motion.main
            key={pathname}
            className="pt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 0.3,
              ease: [0.4, 0, 0.2, 1]
            }}
          >
            {children}
          </motion.main>
        </AnimatePresence>
      </body>
    </html>
  );
}
