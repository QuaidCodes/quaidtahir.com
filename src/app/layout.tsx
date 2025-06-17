import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Header from "@/components/Header";

import "@styles/globals.css";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quaid Tahir | Software Engineer",
  description:
    "Portfolio of Quaid Tahir, a software engineer specializing in React, TypeScript, and scalable web applications.",
  icons: {
    icon: "/favicon_io/favicon.ico",
  },
  keywords: [
    "Quaid Tahir",
    "Software Engineer",
    "Amazon",
    "Portfolio",
    "React",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Quaid Tahir", url: "https://quaidtahir.com" }],
  openGraph: {
    title: "Quaid Tahir | Software Engineer",
    description:
      "Explore the portfolio of Quaid Tahir, a full-stack developer building responsive, scalable applications.",
    url: "https://quaidtahir.com",
    siteName: "Quaid Tahir Portfolio",
    images: [
      {
        url: "https://quaidtahir.com/preview.png", // make this
        width: 1200,
        height: 630,
        alt: "Screenshot of Quaid Tahir's Portfolio",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
      >
        <Header />
        <div className="pt-[110px] border border-white"></div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
