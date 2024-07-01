
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from '@/components/Navigation';
import Favicon from "@/app/favicon.ico"


import { useEffect, useState } from "react";
import Footer from "@/components/footer";
/* <Navigation/> */





const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arsalan Porfolio",
  description: "A portfolio website for Arsalan",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 
{
  

  

  return (
    <html lang="en">
      <head><link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </head>
      <body className={inter.className}>
        <Navigation/>
        {children}
        <Footer/>
          <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
      <script>
        AOS.init();
      </script>
        </body>
       
    </html>
  );
}
