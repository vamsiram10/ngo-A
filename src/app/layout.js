import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/common/navbar/Navbar";
import Footer from "@/components/common/footer/Footer";
import AnimatedCursor from "@/components/utils/animatedcursor/AnimatedCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Avasa Foundation",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/svg/AVASA.svg" type="image/svg+xml" />
      </head>
      <body
        className={`min-h-screen flex flex-col antialiased relative ${geistSans.variable} ${geistMono.variable}`}
        style={{ backgroundColor: "black" }}
      >
        <NavBar />
        <AnimatedCursor />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
