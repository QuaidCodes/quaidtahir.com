import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "./globals.css";

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
    images: [
      {
        url: "public/www.quaidtahir.com_preview.png",
        width: 1200,
        height: 630,
        alt: "Screenshot of my portfolio site",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quaid Tahir Portfolio",
    description: "Portfolio site of Quaid Tahir, showcasing projects and skills.",
    images: ["public/www.quaidtahir.com_preview.png"],
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
        <Footer />
      </body>
    </html>
  );
}
