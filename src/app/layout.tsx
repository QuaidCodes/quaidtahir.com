import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";

import Header from "@/components/Header";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    "Quaid Tahir | Software Engineer. This site is the portfolio site of Quaid Tahir.",
  keywords: [
    "Quaid",
    "Quaid Tahir",
    "Tahir",
    "Software Engineer",
    "Portfolio",
    "React",
    "Next.js",
    "tailwind",
    "typescript",
  ],
  openGraph: {
    title: "Quaid Tahir | Software Engineer",
    description:
      "Portfolio site of Quaid Tahir, showcasing projects and skills.",
    url: "www.quaidtahir.com",
    siteName: "Quaid Tahir Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
