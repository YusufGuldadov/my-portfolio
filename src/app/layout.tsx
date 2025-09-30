import type { Metadata } from "next";
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
  title: "Yusup Guldadov | Portfolio",
  description: "Personal portfolio of Yusup Guldadov showcasing software and embedded projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Search Console Verification */}
        <meta
          name="google-site-verification"
          content="M2XR-kArq4Ql93wD9rOI-FXJifLHFjfF7NoxBbr6q5w"
        />
        {/* Optional SEO tags */}
        <meta
          name="keywords"
          content="portfolio, software, embedded, GPS, LoRa, projects, Next.js, developer"
        />
        <meta name="author" content="Yusup Guldadov" />
        <meta property="og:title" content="Yusup Guldadov | Portfolio" />
        <meta
          property="og:description"
          content="Personal portfolio of Yusup Guldadov showcasing software and embedded projects."
        />
        <meta property="og:type" content="website" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
