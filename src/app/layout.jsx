import Navigation from "@/component/Navigation";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"], // ambil variasi yang dipakai
});

export const metadata = {
  title: "FTL Gym",
  description: "Get Fit Every Day",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  ${inter.variable}  antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
