import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { Analytics } from '@vercel/analytics/react';

const raleway = Raleway({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Kartik's Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.className} mx-auto flex min-h-screen max-w-3xl flex-col px-8 pb-16 antialiased`}
      >
        <Header />
        <main className="flex-grow">
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}
